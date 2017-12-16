import React from 'react';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';

const PieChart = p => {
	if (p.option) {
		option = p.option;
	} else {
		option.legend = p.legend || {
			orient: 'vertical',
			left: '310',
			top: '30px'
		};
		option.data = p.legendData || '';
		option.series[0].data = p.data;
		option.series[0].radius = p.radius || ['50%', '70%'];
		option.series[0].center = p.center || ['160', '110'];
		option.series[0].name = p.dataName;
	}
	return (
		<div>
			<ReactEchartsCore
				echarts={echarts}
				option={option}
				notMerge={true}
				lazyUpdate={true}
				theme={'theme_name'}
			/>
		</div>
	);
};

var option = {
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c} ({d}%)'
	},
	series: [
		{
			type: 'pie',
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			color: ['#156ae8', '#00c0ef']
		}
	]
};

export default PieChart;
