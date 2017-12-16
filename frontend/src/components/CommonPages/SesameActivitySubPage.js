import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SesameActivitySubPage.css';
import CustomerSesameActivity from '../Cards/CustomerSesameActivityCard';
import GoodSesameActivity from '../Cards/GoodSesameActivityCard';
import CustomerGeneralSesameActivity from '../Cards/CustomerGeneralSesameActivityCard';
import {
	DisplayCardArray,
	DisplayCustomerLevel
} from '../Cards/CustomerInfoCard';
import CustomerHistoryCard from '../Cards/CustomerHistoryCard';
import GoodGeneralSesameActivity from '../Cards/GoodGeneralSesameActivityCard';

import { operationEventActions } from '../../actions/operationEventAction';

const sesameActivitySubPage = class extends Component {
	constructor(props) {
		super(props);
		switch (this.props.parent) {
			case 'GoodStatistics':
				let programmeGS = this.props.programme;
				if (programmeGS) {
					this.props.dispatch(
						operationEventActions.getAll(
							"{'programme_id':'" + programmeGS.id + "'}",
							'customerStaff'
						)
					);
				}
				break;
			default:
		}
	}

	render() {
		let returnDOM;
		switch (this.props.parent) {
			case 'CustomerStatistics':
				returnDOM = (
					<CustomerSesameActivity
						data={this.props.goodConsumption}
						barTips={this.props.barTips}
					/>
				);
				break;
			case 'CustomerGeneral':
				let programme = this.props.programme;
				let points = this.props.points;
				let validFrom = programme.validFrom
					? new Date(programme.validFrom).toLocaleString()
					: '';
				let validTo = programme.validTo
					? new Date(programme.validTo).toLocaleString()
					: '';
				let fromDay = validFrom ? validFrom.substring(8, 10) : '';
				let toDay = validTo ? validTo.substring(8, 10) : '';
				let totalDay;
				if (fromDay && toDay) {
					totalDay = toDay - fromDay + 1;
				}
				let objects = [
					validFrom ? validFrom + '开始' : '未知时间开始',
					validTo ? validTo + '结束' : '未知时间结束',
					'共' + (totalDay ? totalDay : 0) + '天'
				];
				let customer = {
					level: '黄金会员',
					points: points ? points : 0,
					earn: '￥0'
				};
				// programme
				let activities = this.props.activities || [];
				let ownActivities = [];
				activities.forEach(item => {
					if (item.programmeId === programme.id) {
						ownActivities.push(item);
					}
				});
				let rewardSummary = this.props.rewardSummary;
				returnDOM = (
					<div>
						<DisplayCardArray title="活动时间" objects={objects} />
						<DisplayCustomerLevel objects={customer} />
						<CustomerGeneralSesameActivity
							rewardSummary={rewardSummary}
							validTo={programme.validTo}
							validFrom={programme.validFrom}
						/>
						<CustomerHistoryCard
							parent="SeasameActivity"
							activities={ownActivities}
						/>
					</div>
				);
				break;
			case 'GoodStatistics':
				// let programmeActivities = this.props.programmeActivities || [];
				let operationEvents = this.props.operationEvents || [];
				let tableData = [];
				operationEvents.forEach(item => {
					let map = {};
					map.date = new Date(item.eventDate).toLocaleDateString();
					map.message =
						(item.city ? item.city : '') + (item.district ? item.district : '');
					map.detail = item.customerStaff
						? item.customerStaff.name ? item.customerStaff.name : '客户信息丢失'
						: '无客户信息';
					tableData.push(map);
				});
				returnDOM = <GoodSesameActivity tableData={tableData} />;
				break;
			case 'GoodGeneral':
				returnDOM = <GoodGeneralSesameActivity style={this.props.style} />;
				break;
			default:
				returnDOM = '';
		}
		return <div className="page">{returnDOM}</div>;
	}
};

function mapStateToProps(state) {
	const { operationEvents, msg } = state.operationEventReducer;
	return {
		operationEvents,
		msg
	};
}

const SesameActivitySubPage = connect(mapStateToProps)(sesameActivitySubPage);

export default SesameActivitySubPage;
