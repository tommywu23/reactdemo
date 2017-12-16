import React, { Component } from 'react';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';

const ScatterChinaMap = class extends Component {
	render() {
		data = this.props.data || [];
		option.series[0].data = convertData(data);
		return (
			<ReactEchartsCore
				echarts={echarts}
				option={option}
				notMerge={true}
				lazyUpdate={true}
				style={{ height: '400px' }}
				theme={'theme_name'}
				onChartReady={this.onChartReadyCallback}
			/>
		);
	}
};

const geoCoordMap = {
	上海: [121.48, 31.22],
	珠海: [113.52, 22.3],
	三亚: [109.31, 18.14],
	惠州: [114.4, 23.09],
	海口: [110.35, 20.02],
	合肥: [117.27, 31.86],
	南京: [118.78, 32.04],
	杭州: [120.19, 30.26],
	苏州: [120.62, 31.32],
	无锡: [120.29, 31.59],
	昆山: [120.95, 31.39],
	广州: [113.23, 23.16],
	深圳: [114.07, 22.62],
	佛山: [113.11, 23.05],
	东莞: [113.75, 23.04],
	福州: [119.3, 26.08],
	厦门: [118.1, 24.46],
	南宁: [108.33, 22.84],
	郑州: [113.65, 34.76],
	武汉: [114.31, 30.52],
	长沙: [113, 28.21],
	南昌: [115.89, 28.68],
	北京: [116.46, 39.92],
	长春: [125.35, 43.88],
	大连: [121.62, 38.92],
	沈阳: [123.38, 41.8],
	哈尔滨: [126.63, 45.75],
	天津: [117.2, 39.13],
	济南: [117, 36.65],
	青岛: [120.33, 36.07],
	太原: [112.53, 37.87],
	石家庄: [114.48, 38.03],
	西安: [108.95, 34.27],
	成都: [104.06, 30.67],
	重庆: [106.54, 29.59],
	昆明: [102.73, 25.04]
};

let data = [];

let convertData = function(data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};

// let convertedData = [
// 	convertData(data),
// 	convertData(
// 		data
// 			.sort(function(a, b) {
// 				return b.value - a.value;
// 			})
// 			.slice(0, 6)
// 	)
// ];

let option = {
	title: {},
	tooltip: {
		trigger: 'item',
		showDelay: '20',
		backgroundColor: '#4A4A4A;',
		padding: [0, 5, 0, 5]
	},
	visualMap: {
		show: false,
		min: 0,
		max: 200,
		splitNumber: 5,
		left: 'left',
		top: 'bottom',
		inRange: {
			color: ['red', 'red']
		},
		precision: 0
	},
	toolbox: {
		show: true,
		orient: 'horizontal',
		right: '2%',
		bottom: '5%',
		itemSize: 18
	},
	geo: {
		map: 'china',
		aspectScale: 0.8, // 地图长宽比
		height: '400px',
		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: false,
				position: 'left'
			}
		},
		itemStyle: {
			normal: {
				areaColor: '#EEEEEE',
				borderWidth: 0.05
			},
			emphasis: {
				areaColor: '#EEEEEE',
				borderWidth: 0.5
			}
		},
		data: data
	},
	series: [
		{
			type: 'scatter',
			coordinateSystem: 'geo',
			symbolSize: function(val) {
				return val[2] / 5;
			},
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: false
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#FF8C00',
					position: 'right',
					show: true
				}
			}
		}
	]
};

export default ScatterChinaMap;
