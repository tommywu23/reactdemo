import React, { Component } from 'react';

import { BarChart } from '../Charts/BarChart/BarChart';
import CardWithHead from './CommonCards/CardWithHead';

const CustomerGeneralSesameActivity = class extends Component {
	render() {
		return (
			<div>
				<CardWithHead
					title="总积分:19,380"
					title1="总兑换积分:12,100"
					title2="现积分:7,480 "
					tips={tips}
				/>
				<div>
					<BarChart option={option} />
				</div>
			</div>
		);
	}
};

const tips = ['12个月'];

const option = {
	color: ['#3398DB'],
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			// 坐标轴指示器，坐标轴触发有效
			type: 'line' // 默认为直线，可选为：'line' | 'shadow'
		},
		formatter: function(params) {
			var tar;
			if (params[0].value !== '-') {
				tar = params[0];
			} else if (params[2].value !== '-') {
				tar = params[2];
			} else if (params[3].value !== '-') {
				tar = params[3];
			}
			return tar.seriesName + ' : ' + tar.value;
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true //刻度是否显示
	},
	xAxis: [
		{
			type: 'category',
			data: [
				'JAN',
				'',
				'',
				'FAB',
				'',
				'',
				'MAR',
				'',
				'',
				'APR',
				'',
				'',
				'MAY',
				'',
				'',
				'JUN'
			],
			axisTick: {
				show: false,
				alignWithLabel: true
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitLine: {
				// 平行于x轴的分割线
				show: false
			}
		}
	],
	series: [
		{
			name: '总积分',
			type: 'bar',
			stack: '总量',
			barWidth: '100%',
			data: [
				4000,
				'-',
				'-',
				4300,
				'-',
				'-',
				3500,
				'-',
				'-',
				3200,
				'-',
				'-',
				5000,
				'-',
				'-',
				6000
			],
			label: {
				normal: {
					show: true,
					position: 'inside',
					textStyle: {
						color: '#333'
					}
				}
			}
		},
		{
			name: '积分辅助',
			type: 'bar',
			stack: '总量',
			itemStyle: {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			},
			data: [
				0,
				4000,
				4300,
				0,
				4300,
				3500,
				0,
				3500,
				3200,
				0,
				3200,
				5000,
				0,
				5000,
				6000,
				0
			]
		},
		{
			name: '增加的积分',
			type: 'bar',
			stack: '总量',
			barWidth: '100%',
			itemStyle: {
				normal: {
					barBorderColor: '#32ea12',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: '#32ea12',
					color: 'rgba(0,0,0,0)'
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					textStyle: {
						color: '#333'
					}
				}
			},
			data: [
				'-',
				700,
				'-',
				'-',
				800,
				'-',
				'-',
				500,
				'-',
				'-',
				2500,
				'-',
				'-',
				1600,
				'-',
				'-'
			]
		},
		{
			name: '减少的积分',
			type: 'bar',
			stack: '总量',
			barWidth: '100%',
			itemStyle: {
				normal: {
					barBorderColor: '#dd4b39',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: '#dd4b39',
					color: 'rgba(0,0,0,0)'
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					textStyle: {
						color: '#333'
					}
				}
			},
			data: [
				'-',
				'-',
				400,
				'-',
				'-',
				1600,
				'-',
				'-',
				800,
				'-',
				'-',
				700,
				'-',
				'-',
				600,
				'-'
			]
		}
	]
};

export default CustomerGeneralSesameActivity;
