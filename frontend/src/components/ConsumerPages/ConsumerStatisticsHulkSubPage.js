import React, { Component } from 'react';

import ProductGroupCard from '../Cards/ProductGroupCard';
import TitleWithTime from '../Cards/TitleWithTime';
import TrendDataCard from '../Cards/TrendDataCard';
import PieChart from '../Charts/PieChart/PieChart';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

const LastConsumerSubPage = class extends Component {
	constructor(props) {
		super(props);
	}

	selectTimeTab() {
		alert(1);
	}

	render() {
		return (
			<div className="page">
				<div className="card">
					<ProductGroupCard title="SKU组" groupList={groupList} />
					<TitleWithTime
						title="活跃消费者地图"
						selectTimeTab={this.selectTimeTab.bind(this)}
					/>
					<TrendDataCard
						num="1081"
						up="18"
						text="个消费者 W49【12/04-12/10】<br>相比w48"
						chartData={data}
					/>
					<div className="offset-2border" />
					<div className="border-inner">
						<PieChart data={pieData} dataName="访问来源" legendData={legendData} />
					</div>
				</div>
				<div className="card">
					<TitleWithTime title="交易" />
					<div>
						共<span className="num-text">142</span>个产品{' '}
						<span className="red-text">↑27%</span>
					</div>
					<ReactEchartsCore
						echarts={echarts}
						option={option}
						notMerge={true}
						lazyUpdate={true}
					/>
				</div>
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
		data: ['W43', 'W45', 'W47', 'W49']
	},
	yAxis: {},
	series: [
		{
			type: 'line',
			smooth: true,
			data: [180, 80, 270, 380]
		}
	]
};

let data = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		right: '15px',
		top: '45px',
		height: '150px'
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['W43', 'W45', 'W47', 'W49']
	},
	yAxis: [
		{
			type: 'value',
			splitNumber: 3,
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			}
		}
	],
	series: [
		{
			type: 'line',
			smooth: 'none',
			data: [110, 102, 180, 150, 210, 186, 205],
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

let pieData = [
	{ value: 943, name: '男' },
	{ value: 126, name: '女' },
	{ value: 1, name: '未知' }
];
let legendData = ['男', '女', '未知'];

const groupList = ['SKU Group A', 'SKU Group B', 'SKU Group C'];

export default LastConsumerSubPage;
