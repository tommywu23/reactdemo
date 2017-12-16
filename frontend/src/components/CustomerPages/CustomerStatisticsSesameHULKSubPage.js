import React, { Component } from 'react';
import ProductGroupCard from '../Cards/ProductGroupCard';
import MapWithDataStatistics from '../Cards/MapWithDataStatistics';
import TitleWithTime from '../Cards/TitleWithTime';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

const groupList = ['Small Bars'];

const CustomerStatisticsHULKSubPage = () => (
	<div className="page">
		<div className="card">
			<ProductGroupCard title="客户组" groupList={groupList} />
		</div>
		<div className="card">
			<TitleWithTime title="窜货量" />
			<MapWithDataStatistics
				num="103"
				up="3"
				text="家店铺11月相比10月"
				chartData={option}
			/>
		</div>
		<div className="card">
			<TitleWithTime title="绿瓶盖" />
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
			<div>
				单位: <span className="bottom-box fill">个</span>
				<span className="bottom-box">箱</span>
				<span className="bottom-box">人民币</span>
			</div>
		</div>
	</div>
);

let option = {
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

export default CustomerStatisticsHULKSubPage;
