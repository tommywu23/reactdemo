import React, { Component } from 'react';

import LineChart from '../Charts/LineChart/LineChart';
import CardWithHead from './CommonCards/CardWithHead';
import GoodHistory from '../Cards/GoodHistoryCard';

const GoodSesameActivity = class extends Component {
	render() {
		return (
			<div>
				<div className="card">
					<CardWithHead title="产品销售走势" tips={tips} />
					<LineChart />
				</div>
				<div>
					<GoodHistory tableData={this.props.tableData} />
				</div>
			</div>
		);
	}
};

const tips = ['12个月'];

export default GoodSesameActivity;
