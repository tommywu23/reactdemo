import React from 'react';

import ProductGroupCard from '../Cards/ProductGroupCard';
import TimeTab from '../Cards/TimeTab';
import TrendDataCard from '../Cards/TrendDataCard';
import MapWithDataStatistics from '../Cards/MapWithDataStatistics';
import intl from 'react-intl-universal';

import './LastDataSubPage.css';

const groupList = ['Chivas', 'Martell', "Ballantile's"];

const LastDataSubPage = ({ goodMasters }) => (
	<div className="page">
		<div className="card">
			<ProductGroupCard title="" groupList={groupList} />
			<TimeTab timeTab="week" />
			<TrendDataCard
				num="62,470"
				up="5"
				text="箱 (总量)<br>相比10月"
				statistic="生产"
				chartData={creationdData}
			/>
		</div>

		<div className="card">
			<TrendDataCard
				num="14,700"
				up="5"
				text="箱 (总量)<br>相比10月"
				statistic="物流"
				chartData={distributionData}
			/>
		</div>
		<div className="card">
			<TrendDataCard
				num="38,560"
				up="5"
				text="箱 (总量)<br>相比10月"
				statistic="客户交易"
				chartData={exchangeData}
			/>
		</div>
		<div className="card">
			<TrendDataCard
				num="27,382"
				up="5"
				text="箱 (总量)<br>相比10月"
				statistic="消费者"
				chartData={comsumeData}
			/>
		</div>
	</div>
);

let creationdData = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		top: '50px',
		height: '150px',
		width: '280px'
	},
	xAxis: {
		axisLabel: {
			interval: 0 //横轴信息全部显示
			//rotate: 60, //60度角倾斜显示
		},
		axisLine: {
			onZero: false
		},
		axisTick: {
			show: false
		},
		data: ['5月', '', '7月', '', '9月', '', '11月']
	},
	yAxis: [
		{
			type: 'value',
			splitNumber: 3,
			axisLine: { show: false },
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
			smooth: true,
			data: [118, 120, 94, 83, 103, 107, 116],
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

let distributionData = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		top: '50px',
		height: '150px',
		width: '280px'
	},
	xAxis: {
		axisLabel: {
			interval: 0 //横轴信息全部显示
			//rotate: 60, //60度角倾斜显示
		},
		axisLine: {
			onZero: false
		},
		axisTick: {
			show: false
		},
		data: ['5月', '', '7月', '', '9月', '', '11月']
	},
	yAxis: [
		{
			type: 'value',
			splitNumber: 3,
			axisLine: { show: false },
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
			smooth: true,
			data: [118, 120, 55, 36, 87, 92, 116],
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

let exchangeData = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		top: '50px',
		height: '150px',
		width: '280px'
	},
	xAxis: {
		axisLabel: {
			interval: 0 //横轴信息全部显示
			//rotate: 60, //60度角倾斜显示
		},
		axisLine: {
			onZero: false
		},
		axisTick: {
			show: false
		},
		data: ['5月', '', '7月', '', '9月', '', '11月']
	},
	yAxis: [
		{
			type: 'value',
			splitNumber: 3,
			axisLine: { show: false },
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
			smooth: true,
			data: [130, 136, 110, 108, 114, 114, 130],
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

let comsumeData = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		top: '50px',
		height: '150px',
		width: '280px'
	},
	xAxis: {
		axisLabel: {
			interval: 0 //横轴信息全部显示
			//rotate: 60, //60度角倾斜显示
		},
		axisLine: {
			onZero: false
		},
		axisTick: {
			show: false
		},
		data: ['5月', '', '7月', '', '9月', '', '11月']
	},
	yAxis: [
		{
			type: 'value',
			splitNumber: 3,
			axisLine: { show: false },
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
			smooth: true,
			data: [120, 126, 105, 108, 114, 114, 130],
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

export default LastDataSubPage;
