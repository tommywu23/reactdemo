import React, { Component } from 'react';

import ScatterChinaMap from '../Charts/Map/ScatterChinaMap';
import LineChart from '../Charts/LineChart/LineChart';
import CardWithHead from './CommonCards/CardWithHead';
import BarWithLink from './CommonCards/BarWithLink';

const CustomerSesameActivity = class extends Component {
	render() {
		console.log(this.props);
		let consumption = this.props.data || [];
		let barTips = this.props.barTips;
		let lineChartXAxis = [];
		let data = [];
		if (consumption.monthlyConsumption) {
			consumption.monthlyConsumption.forEach(function(item) {
				lineChartXAxis.push(item.month);
				data.push(item.value);
			});
		}
		return (
			<div>
				<div className="card">
					<BarWithLink tips={barTips} />
				</div>
				<div className="card">
					<CardWithHead title="交易情况" tips={tips} />
					<div>
						<ScatterChinaMap
							data={consumption ? consumption.goodConsumptionMap : []}
						/>
						<hr style={{ margin: '15px 0', width: '100%' }} />
						<LineChart lineChartXAxis={lineChartXAxis} data={data} />
					</div>
				</div>
			</div>
		);
	}
};

const tips = ['出货', '1周'];

export default CustomerSesameActivity;
