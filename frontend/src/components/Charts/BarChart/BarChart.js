import React from 'react';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';

import './BarChart.css';

const BarChart = p => {
	let getOption = '';
	if (p.option) {
		getOption = p.option;
	} else {
		getOption = option;
		option.xAxis.data = p.xData;
		setOption(p, option);
	}

	return (
		<div>
			<ReactEchartsCore
				echarts={echarts}
				option={getOption}
				notMerge={true}
				lazyUpdate={true}
			/>
		</div>
	);
};

const BarChartReverse = p => {
	let getOption = '';
	if (p.option) {
		getOption = p.option;
	} else {
		getOption = optionReverse;
		optionReverse.xAxis.type = 'value';
		optionReverse.yAxis.type = 'category';
		optionReverse.yAxis.data = p.yData;
		setOption(p, optionReverse);
	}

	return (
		<div>
			<ReactEchartsCore
				echarts={echarts}
				option={getOption}
				notMerge={true}
				lazyUpdate={true}
				theme={'theme_name'}
			/>
		</div>
	);
};

const setOption = (origin, current) => {
	current.title.text = origin.title;
	current.grid = origin.grid;
	if (origin.ySplitLineshow) {
		current.yAxis.splitLine.show = origin.ySplitLineshow;
	}
	current.series[0].data = origin.data;
	current.series[0].barWidth = origin.barWidth;
};

const option = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'line' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {},
	xAxis: {
		data: [],
		axisTick: {
			alignWithLabel: true
		}
	},
	yAxis: {
		splitLine: { show: false } // 平行于x轴的分割线
	},
	series: [
		{
			type: 'bar',
			color: ['#156ae8']
		}
	]
};

const optionReverse = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'line' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {},
	xAxis: {
		data: [],
		axisTick: {
			alignWithLabel: true
		}
	},
	yAxis: {
		splitLine: {} // 平行于x轴的分割线
	},
	series: [
		{
			type: 'bar',
			color: ['#156ae8']
		}
	]
};

export { BarChart, BarChartReverse };
