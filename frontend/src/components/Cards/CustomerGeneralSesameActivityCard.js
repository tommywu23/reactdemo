import React, { Component } from 'react';

import { BarChart } from '../Charts/BarChart/BarChart';
import CardWithHead from './CommonCards/CardWithHead';
import { dateUtils } from '../../utils/dateUtils';

const CustomerGeneralSesameActivity = class extends Component {
	render() {
		let rewardSummary = this.props.rewardSummary;
		let option = {
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
					data: [],
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
					data: [],
					label: {
						normal: {
							show: true,
							position: 'top',
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
					data: []
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
					data: []
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
					data: []
				}
			]
		};
		// let rewardSummary = [
		// 	{
		// 		refDate: '2017-11-01',
		// 		addedPoints: 500,
		// 		usedPoints: 0,
		// 		returnedPoints: 600,
		// 		registrationPoints: 100
		// 	},
		// 	{
		// 		refDate: '2017-12-01',
		// 		addedPoints: 300,
		// 		usedPoints: 20,
		// 		returnedPoints: 0,
		// 		registrationPoints: 10
		// 	}
		// ];
		// count amount points and put to map
		if (rewardSummary) {
			// get beginDate and endDate
			let endDate = new Date().toLocaleDateString();
			endDate = endDate
				? dateUtils.getAroundDate(
						2,
						endDate.replace('/', '-').replace('/', '-'),
						'-',
						'ADD'
					)
				: '2018-01-01';

			let rewardSummaryMap = {};
			let amountPoints = 0;
			rewardSummary.forEach(item => {
				let odd =
					item.addedPoints +
					item.returnedPoints +
					item.registrationPoints -
					item.usedPoints;
				item.amountPoints = amountPoints;
				amountPoints = amountPoints + odd;
				rewardSummaryMap[
					dateUtils.getAroundDate(1, item.refDate, '-', 'MINUS').substring(0, 7)
				] = item;
			});
			console.log(rewardSummaryMap);
			// push data to chart
			for (let i = 6; i > 1; i--) {
				let currentMonth = dateUtils
					.getAroundDate(i, endDate, '-', 'MINUS')
					.substring(0, 7);
				let nextMonth;
				nextMonth = dateUtils
					.getAroundDate(i - 1, endDate, '-', 'MINUS')
					.substring(0, 7);
				option.xAxis[0].data.push(currentMonth);
				if (rewardSummaryMap[currentMonth]) {
					option.series[0].data.push(
						rewardSummaryMap[currentMonth].amountPoints
					);
					option.series[1].data.push(0);
					option.series[1].data.push(
						rewardSummaryMap[currentMonth].amountPoints
					);
					if (i !== 2) {
						option.series[1].data.push(
							rewardSummaryMap[nextMonth]
								? rewardSummaryMap[nextMonth].amountPoints
								: 0
						);
					}
					option.series[2].data.push('-');
					option.series[2].data.push(
						rewardSummaryMap[currentMonth].addedPoints +
							rewardSummaryMap[currentMonth].registrationPoints +
							rewardSummaryMap[currentMonth].returnedPoints
					);
					option.series[2].data.push('-');
					option.series[3].data.push('-');
					option.series[3].data.push('-');
					option.series[3].data.push(rewardSummaryMap[currentMonth].usedPoints);
				} else {
					option.series[0].data.push(0);
					option.series[2].data.push('-');
					option.series[3].data.push('-');
					option.series[1].data.push(0);
					option.series[1].data.push(0);
					option.series[1].data.push(0);
					option.series[3].data.push('-');
					option.series[3].data.push(0);
					option.series[2].data.push(0);
					option.series[2].data.push('-');
				}
				option.xAxis[0].data.push('');
				option.xAxis[0].data.push('');
				option.series[0].data.push('-');
				option.series[0].data.push('-');
			}
			option.xAxis[0].data.push(endDate);
			option.series[1].data.push(amountPoints);
			option.series[1].data.push(0);
		}
		// console.log(option.xAxis[0].data);
		// console.log(option.series[0].data);
		// console.log(option.series[1].data);
		// console.log(option.series[2].data);
		// console.log(option.series[3].data);
		return (
			<div className="card">
				<CardWithHead title="积分统计" tips={tips} />
				<div>
					<BarChart option={option} />
				</div>
			</div>
		);
	}
};

const tips = ['6个月'];

export default CustomerGeneralSesameActivity;
