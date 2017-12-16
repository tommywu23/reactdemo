import React, { Component } from 'react';

import LineChart from '../Charts/LineChart/LineChart';
import CardWithHead from './CommonCards/CardWithHead';

const CustomerGeneralConsumption = class extends Component {
	constructor(props) {
		super(props);
		console.log(super.props);
	}

	render() {
		return (
			<div className="page">
				<div className="card">
					<CardWithHead title="交易趋势" tips={tips} />
					<div className="font-content-title top-bottom-15">总交易量28,393</div>
					<div className="fill-blue-border top-bottom-15">按产品（个）▼</div>
					<div className="top-bottom-15">
						<LineChart />
					</div>
				</div>
			</div>
		);
	}
};

const tips = ['获得', '出货', '12个月', '所有产品'];

//const barTips = ['共462个活跃用户'];

export default CustomerGeneralConsumption;
