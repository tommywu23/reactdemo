import React, { Component } from 'react';
import ProductGroupCard from '../Cards/ProductGroupCard';
import MapWithDataStatistics from '../Cards/MapWithDataStatistics';
import TitleWithTime from '../Cards/TitleWithTime';
import HistoryRecordCard from '../Cards/HistoryRecordCard';

const groupList = ['Chivas', 'Martell', "Ballantile's"];
const tableHeader = {
	date: '被复制的二维码',
	message: 'SKU',
	detail: '假货量'
};

const tableData = [
	{
		date: '#1SAFD22',
		message: '马爹利名士700ml',
		detail: '1,028'
	},
	{
		date: '#2FASDF',
		message: '芝华士12年700ml',
		detail: '927'
	},
	{
		date: '#1SAFD22',
		message: '芝华士12年700ml（无盒）',
		detail: '736'
	},
	{
		date: '#1SAFD22',
		message: '马爹利1000ml',
		detail: '271'
	},
	{
		date: '#1SAFD22',
		message: '百龄坛700ml',
		detail: '102'
	}
];

const LHLHActivitySubPage = () => (
	<div className="page">
		<div className="card">
			<ProductGroupCard title="产品组" groupList={groupList} />
		</div>
		<div className="card">
			<TitleWithTime title="假货数量（个）" timeTab="week" />
			<MapWithDataStatistics
				num="6,081"
				up="13"
				text="个假货 W49【12/04-12/10】<br>相比w48"
				chartData={data}
			/>
		</div>
		<div className="card">
			<HistoryRecordCard
				title=""
				highlight="#2c8efe"
				tableData={tableData}
				tableHeader={tableHeader}
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
		data: ['W43', '', 'W45', '', 'W47', '', 'W49']
	},
	yAxis: [
		{
			type: 'value',
			splitNumber: 2,
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
			data: [98, 98, 192, 202, 137, 139, 203],
			itemStyle: {
				normal: {
					color: '#2c8efe'
				}
			}
		}
	]
};

export default LHLHActivitySubPage;
