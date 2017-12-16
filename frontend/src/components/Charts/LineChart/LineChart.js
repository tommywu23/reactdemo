import React, { Component } from 'react';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

const LineChart = class extends Component {
	render() {
		option.xAxis.data = this.props.lineChartXAxis;
		option.series[0].data = this.props.data;
		return (
			<div>
				<ReactEchartsCore
					echarts={echarts}
					option={option}
					notMerge={true}
					lazyUpdate={true}
					onChartReady={this.onChartReadyCallback}
				/>
			</div>
		);
	}
};

let option = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		left: '7%',
		right: 0,
		top: '15px'
	},
	xAxis: {
		axisLabel: {
			interval: 0 //横轴信息全部显示
			//rotate: 60, //60度角倾斜显示
		},
		axisTick: {
			show: false
		}
	},
	yAxis: {
		axisLine: { show: false },
		axisTick: { show: false }
	},
	series: [
		{
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

export default LineChart;
