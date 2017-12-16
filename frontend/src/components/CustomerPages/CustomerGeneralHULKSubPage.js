import React, { Component } from 'react';
import TitleWithTime from '../Cards/TitleWithTime';
import HistoryRecordCard from '../Cards/HistoryRecordCard';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import CustomerGeneralSesameActivity from '../Cards/jifentongjiLHLH';

import './CustomerGeneralHULKSubPage.css';

const groupList = ['Chivas', 'Martell', "Ballantile's"];
const tableHeader = {
	date: '用户名',
	message: '时间',
	detail: '扫描产品'
};

const tableData = [
	{
		date: 'Feng峰',
		message: '2017.12.10',
		detail: '芝华士12年500ml'
	},
	{
		date: 'xiaoma',
		message: '2017.12.10',
		detail: '芝华士12年500ml'
	},
	{
		date: 'weriuh',
		message: '2017.12.10',
		detail: '芝华士12年500ml'
	},
	{
		date: 'Katharine',
		message: '2017.12.10',
		detail: '芝华士12年500ml'
	}
];

const LHLHActivitySubPage = () => (
	<div className="page">
		<div className="card">
			<TitleWithTime title="绿瓶盖" type="needGroup" />
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
		<div className="card">
			<TitleWithTime title="积分统计" />
			<CustomerGeneralSesameActivity />
		</div>
		<div className="card">
			<HistoryRecordCard
				title="操作记录"
				tableData={tableData}
				tableHeader={tableHeader}
			/>
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

export default LHLHActivitySubPage;
