import React from 'react';

import ChinaMap from '../Charts/Map/ChinaMap';
import BarWithLink from './CommonCards/BarWithLink';
import './Card.css';
import warningSvg from '../../images/warning.svg';

const GoodFleeing = p => (
	<div className="page">
		<div className="card">
			<div className="list-col">
				<ChinaMap option={option} />
				<div style={{ marginTop: '30px' }}>
					<BarWithLink
						src={warningSvg}
						tips={['广东省广州市']}
						midTip="16:20:00 2017-6-20"
						toPage="/"
					/>
					<hr style={{ width: '100%' }} />
					<BarWithLink
						src={warningSvg}
						tips={['广州省深圳市']}
						midTip="16:20:00 2017-6-20"
						toPage="/"
					/>
					<hr style={{ width: '100%' }} />
					<BarWithLink
						src={warningSvg}
						tips={['广州省深圳市']}
						midTip="16:20:00 2017-6-20"
						toPage="/"
					/>
				</div>
			</div>
		</div>
	</div>
);

const geoCoordMap = {
	上海: [121.48, 31.22],
	深圳: [114.07, 22.62],
	北京: [116.46, 39.92],
	东莞: [113.75, 23.04],
	珠海: [113.52, 22.3]
};

const data = [
	{
		name: '珠海',
		value: '150'
	},
	{
		name: '东莞',
		value: '100'
	},
	{
		name: '深圳',
		value: '100'
	}
];

const data1 = [
	{
		name: '北京',
		value: '150'
	},
	{
		name: '山西',
		value: '100'
	},
	{
		name: '河北',
		value: '100'
	},
	{
		name: '天津',
		value: '100'
	},
	{
		name: '辽宁',
		value: '100'
	}
];

const convertData = function(data) {
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

const convertedData = [
	convertData(data),
	convertData(
		data
			.sort(function(a, b) {
				return b.value - a.value;
			})
			.slice(0, 6)
	)
];

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
				areaColor: '#FFFFFF',
				borderWidth: 0.2
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
			data: convertedData[0],
			symbolSize: function(val) {
				return val[2] / 10;
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
		},
		{
			type: 'map',
			mapType: 'china',
			data: data1,
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
					areaColor: '#FFFFFF',
					borderWidth: 0.2
				},
				emphasis: {
					areaColor: '#EEEEEE',
					borderWidth: 0.5
				}
			}
		}
	]
};

export default GoodFleeing;
