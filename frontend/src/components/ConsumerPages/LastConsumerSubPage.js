import React, { Component } from 'react';
import TitleWithTime from '../Cards/TitleWithTime';
import TrendDataCard from '../Cards/TrendDataCard';
import PieChart from '../Charts/PieChart/PieChart';
import { Members } from '../Cards/CustomerInfoCard';

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
				<div>
					<Members objects={members} withHeader={withHeader} />
				</div>
			</div>
		);
	}
};

const withHeader = ['名字', 'openID', '交易量'];

let members = [
	{
		avatarImageUrl: '../../images/salesSunyiming.png',
		name: '孙志',
		role: 'BOSS',
		sale: '25'
	},
	{
		avatarImageUrl: '../../images/salesSunyiming.png',
		name: '孙志',
		role: 'BOSS'
	},
	{
		avatarImageUrl: '../../images/salesSunyiming.png',
		name: '孙志',
		role: 'BOSS'
	},
	{
		avatarImageUrl: '../../images/salesSunyiming.png',
		name: '孙志',
		role: 'BOSS'
	},
	{
		avatarImageUrl: '../../images/salesSunyiming.png',
		name: '孙志',
		role: 'BOSS'
	},
	{
		avatarImageUrl: '../../images/salesSunyiming.png',
		name: '孙志',
		role: 'BOSS'
	},
	{
		avatarImageUrl: '../../images/salesSunyiming.png',
		name: '孙志',
		role: 'BOSS'
	}
];

let pieData = [
	{ value: 943, name: '男' },
	{ value: 126, name: '女' },
	{ value: 1, name: '未知' }
];
let legendData = ['男', '女', '未知'];

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

export default LastConsumerSubPage;
