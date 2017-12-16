import React, { Component } from 'react';
import HistoryRecordCard from './HistoryRecordCard';
import CardWithHead from './CommonCards/CardWithHead';
import PropTypes from 'prop-types';

import './CustomerHistoryCard.css';

export default class CustomerHistoryCard extends Component {
	render() {
		let tableData = [];
		let activities = this.props.activities || [];
		activities.forEach(item => {
			let map = {};
			map.date = item.createdDate;
			map.message = item.points;
			map.detail = item.activityType;
			tableData.push(map);
		});

		const customerHistory1 = {
			title: '历史记录',
			tableHeader: {
				date: '时间',
				message: '积分',
				detail: '详情'
			},
			tableData: tableData
		};
		const title = '订单历史';
		const tips = ['全部', '全部员工'];
		const customerHistory2 = {
			title: '共获得积分: 23,393	共使用积分: 0',
			tableHeader: {
				date: '时间',
				message: '积分',
				detail: '详情'
			},
			tableData: tableData
		};
		switch (this.props.parent) {
			case 'SeasameActivity':
				return (
					<div className="card-noPadding">
						<div className="history-order">
							<CardWithHead className="" title={title} tips={tips} />
						</div>
						<div style={this.props.display}>
							<HistoryRecordCard
								title={customerHistory2.title}
								tableHeader={customerHistory2.tableHeader}
								tableData={customerHistory2.tableData}
							/>
						</div>
					</div>
				);
			case 'History':
				return (
					<div className="card-noPadding">
						{/* <div style={this.props.display}>
							<HistoryRecordCard
								title={customerHistory1.title}
								tableHeader={customerHistory1.tableHeader}
								tableData={customerHistory1.tableData}
							/>
						</div> */}
					</div>
				);
			default:
				return '';
		}
	}
}
