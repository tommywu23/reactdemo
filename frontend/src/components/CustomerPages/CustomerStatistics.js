import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CustomerStatistics.css';

import Item from '../Navigation/Item';
import Header from '../Navigation/Header';
import AddCustomerSubPage from './AddCustomerSubPage';
import AllCustomerSubPage from './AllCustomerSubPage';
import CustomerMapSubPage from './CustomerMapSubPage';
import CustomerConsumptionSubPage from './CustomerConsumptionSubPage';
import SesameActivitySubPage from '../CommonPages/SesameActivitySubPage';
import COActivitySubPage from '../CommonPages/COActivitySubPage';
import CustomerPatternSubPage from './CustomerPatternSubPage';
import CustomerStatisticsHULKSubPage from './CustomerStatisticsHULKSubPage';
import CustomerStatisticsSesameHULKSubPage from './CustomerStatisticsSesameHULKSubPage';
import { connect } from 'react-redux';
// import images
import { customerActions } from '../../actions/customerAction';
import customerStatisticsLogo from '../../images/customer-statistics-logo.png';
import addCustomer from '../../images/add-customer.svg';
import customerDashboard from '../../images/customer-dashboard.svg';
import consumption from '../../images/consumption.svg';
import sesameActivity from '../../images/sesame-activity.svg';
import coActivity from '../../images/co-activity.svg';
import allCustomerSvg from '../../images/all-customer.svg';
import hulkSvg from '../../images/Hulk.svg';

const customerStatistics = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigatePage: 'addCustomerKey'
		};

		this.props.dispatch(
			customerActions.getAll(
				this.state.query,
				this.state.pageNum,
				this.state.pageSize
			)
		);
	}

	render() {
		let customers = [];
		let customerMap = [];
		let customerMapBarTips = null;
		let goodMapBarTips = null;
		let goodConsumption = {};
		let goodConsumptionMap = [];
		if (this.props.customerStatistics) {
			customers = this.props.customerStatistics.customer;
			customerMap = this.props.customerStatistics.map;
			customerMapBarTips = '共' + mapCountCalculate(customerMap) + '个';
			goodConsumption = this.props.customerStatistics.business;
			goodConsumptionMap = goodConsumption
				? goodConsumption.goodConsumptionMap
				: '';
			goodMapBarTips = '共' + mapCountCalculate(goodConsumptionMap) + '个活跃用户';
		}
		return (
			<div className="layout">
				<div className="navigation" ref="menu">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Header titleName="客户统计" icon={customerStatisticsLogo} />
					</Link>
					<ul className="navigation-list navigation-top">
						<Item
							name="所有客户"
							id="addCustomerKey"
							count="12,302"
							icon={allCustomerSvg}
							selected={
								this.state.navigatePage === 'addCustomerKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-medium">
						{/* <Item
							name="客户地图"
							count={mapCountCalculate(customerMap)}
							id="customerMapKey"
							icon={customerDashboard}
							selected={
								this.state.navigatePage === 'customerMapKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="交易"
							count={mapCountCalculate(goodConsumptionMap)}
							id="customerConsumptionKey"
							icon={consumption}
							selected={
								this.state.navigatePage === 'customerConsumptionKey'
									? true
									: false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/> */}
						<Item
							name="Hulk"
							id="sesameActivityKeyLHLH"
							count="7,437"
							selected={
								this.state.navigatePage === 'sesameActivityKeyLHLH'
									? true
									: false
							}
							icon={hulkSvg}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="芝麻活动"
							count="7,480"
							// count={mapCountCalculate(goodConsumptionMap)}
							id="sesameActivityKey"
							icon={sesameActivity}
							selected={
								this.state.navigatePage === 'sesameActivityKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						{/* <Item
							name="CO活动"
							count="202"
							id="coActivityKey"
							icon={coActivity}
							selected={
								this.state.navigatePage === 'coActivityKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/> */}
					</ul>
					{/* <ul className="navigation-list navigation-small">
						<Item
							name="用户画像"
							count="122,328"
							id="customerPatternKey"
							icon="/images/customer-map.svg"
							selected={
								this.state.navigatePage === 'customerPatternKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul> */}
				</div>
				<div className="main">
					{/* {this.state.navigatePage === 'addCustomerKey' ? (
						<AddCustomerSubPage customers={customers} msg={this.props.msg} />
					) : null} */}
					{this.state.navigatePage === 'addCustomerKey' ? (
						<AllCustomerSubPage customers={customers} msg={this.props.msg} />
					) : null}
					{this.state.navigatePage === 'customerMapKey' ? (
						<CustomerMapSubPage
							customerMap={customerMap}
							barTips={customerMapBarTips}
						/>
					) : null}
					{this.state.navigatePage === 'customerConsumptionKey' ? (
						<CustomerConsumptionSubPage
							goodConsumption={goodConsumption}
							barTips={goodMapBarTips}
						/>
					) : null}
					{this.state.navigatePage === 'sesameActivityKey' ? (
						// <SesameActivitySubPage
						// 	parent="CustomerStatistics"
						// 	goodConsumption={goodConsumption}
						// 	barTips={goodMapBarTips}
						// />
						<CustomerStatisticsSesameHULKSubPage />
					) : null}
					{this.state.navigatePage === 'coActivityKey' ? (
						<COActivitySubPage parent="CustomerStatistics" />
					) : null}
					{this.state.navigatePage === 'customerPatternKey' ? (
						<CustomerPatternSubPage parent="CustomerPatternSubPage" />
					) : null}
					{this.state.navigatePage === 'sesameActivityKeyLHLH' ? (
						<CustomerStatisticsHULKSubPage />
					) : null}
				</div>
			</div>
		);
	}
};

function mapCountCalculate(mapData) {
	let total = 0;
	if (mapData) {
		for (let i = 0; i < mapData.length; i++) {
			total = total + mapData[i].value;
		}
	}
	return total;
}

function mapStateToProps(state) {
	const { customerStatistics, msg } = state.customerReducer;
	return {
		customerStatistics,
		msg
	};
}

const CustomerStatistics = connect(mapStateToProps)(customerStatistics);
export default CustomerStatistics;
