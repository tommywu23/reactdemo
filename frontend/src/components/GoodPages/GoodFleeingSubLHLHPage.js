import React, { Component } from 'react';
import ProductGroupCard from '../Cards/ProductGroupCard';
import MapWithDataStatistics from '../Cards/MapWithDataStatistics';
import TitleWithTime from '../Cards/TitleWithTime';
import HistoryRecordCard from '../Cards/HistoryRecordCard';

const groupList = ['Chivas', 'Martell', "Ballantile's"];
const tableHeader = {
	date: '经销商',
	message: '',
	detail: '窜货量'
};

const tableData = [
	{
		date: '广州威达有限公司',
		message: '',
		detail: '3,026'
	},
	{
		date: '大光明有限公司',
		message: '',
		detail: '2,836'
	},
	{
		date: '郑达通运',
		message: '',
		detail: '1,331'
	},
	{
		date: '光发红有限公司',
		message: '',
		detail: '864'
	},
	{
		date: '顺事达',
		message: '',
		detail: '271'
	}
];

const LHLHActivitySubPage = () => (
	<div className="page">
		<div className="card">
			<ProductGroupCard title="产品组" groupList={groupList} />
		</div>
		<div className="card">
			<TitleWithTime title="窜货量" timeTab="week" />
			<MapWithDataStatistics
				num="11,538"
				up="3"
				text="个窜货 W49【12/04-12/10】<br>相比w48"
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
		right: '15px',
		top: '45px',
		height: '150px'
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['W43', '', 'W45', '', 'W47', '', 'W49']
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

export default LHLHActivitySubPage;
