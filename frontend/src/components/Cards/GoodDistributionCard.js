import React, { Component } from 'react';

import LineChart from '../Charts/LineChart/LineChart';
import CardWithHead from './CommonCards/CardWithHead';

const GoodDistribution = class extends Component {
	render() {
		return (
			<div className="page">
				<div className="card">
					<CardWithHead title="物流数量走势" tips={tips} />
					<LineChart />
				</div>
			</div>
		);
	}
};

const tips = ['12个月'];

export default GoodDistribution;
