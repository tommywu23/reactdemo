import React from 'react';
import ProductGroupCard from '../Cards/ProductGroupCard';
import TitleWithTime from '../Cards/TitleWithTime';
import MapWithDataStatistics from '../Cards/MapWithDataStatistics';
import intl from 'react-intl-universal';

const groupList = ['Chivas', 'Martell', "Ballantile's"];

const GoodStockSubPage = () => (
	<div className="page">
		<div className="card">
			<ProductGroupCard
				title={intl.get('product.group')}
				groupList={groupList}
			/>
			<TitleWithTime
				title={intl.get('stock')}
				type="goodStatistics"
				timeTab="month"
			/>
			<MapWithDataStatistics
				num="121"
				up="5"
				text="天 (从DC发货到消费者扫描)<br>相比10月"
				statistic="平均"
				chartData={data}
			/>
		</div>

	</div>
);

let data = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		right: 0,
		top: '45px',
		height: '150px'
	},
	xAxis: {
		axisLabel: {
			interval: 0 //横轴信息全部显示
			//rotate: 60, //60度角倾斜显示
		},
		axisLine: {
			onZero: false
		},
		data: ['5月', '7月', '9月', '11月']
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
			data: [118, 90, 103, 121],
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

export default GoodStockSubPage;
