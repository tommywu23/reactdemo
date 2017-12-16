import React from 'react';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

const OPTION = {
	tooltip: {
		formatter: '{a} <br/>{b} : {c}%'
	},
	toolbox: {
		feature: {
			restore: {},
			saveAsImage: {}
		}
	},
	series: [
		{
			name: '诚信等级',
			radius: 80,
			type: 'gauge',
			pointer: {
				show: false
			},
			detail: { formatter: '{value}' },
			title: {
				show: true,
				offsetCenter: [0, '-5%'], // x, y，单位px
				textStyle: {
					color: '#hhh',
					fontSize: 10
				}
			},
			data: [{ value: 50, name: '诚信等级' }]
		}
	]
};

const Guage = () => (
	<div>
		<ReactEchartsCore
			echarts={echarts}
			option={OPTION}
			notMerge={true}
			lazyUpdate={true}
			theme={'theme_name'}
			onChartReady={this.onChartReadyCallback}
		/>
	</div>
);

export default Guage;
