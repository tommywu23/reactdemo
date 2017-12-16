import React, { Component } from 'react';
import HistoryRecordCard from './HistoryRecordCard';
import PropTypes from 'prop-types';

export default class GoodHistoryCard extends Component {
	render() {
		const goodHistory = this.props.goodHistory
			? this.props.goodHistory
			: {
					title: '扫描历史',
					tableHeader: {
						date: '时间',
						message: '地点',
						detail: '用户'
					},
					tableData: this.props.tableData ? this.props.tableData : []
				};
		return (
			<div style={this.props.display} className="card card-noPadding">
				<HistoryRecordCard
					title={goodHistory.title}
					tableHeader={goodHistory.tableHeader}
					tableData={goodHistory.tableData}
				/>
			</div>
		);
	}
}
