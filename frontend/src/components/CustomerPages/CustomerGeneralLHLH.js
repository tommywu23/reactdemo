import React, { Component } from 'react';
import ProductGroupCard from '../Cards/ProductGroupCard';
import MapWithDataStatistics from '../Cards/MapWithDataStatistics';
import TitleWithTime from '../Cards/TitleWithTime';
import HistoryRecordCard from '../Cards/HistoryRecordCard';

const groupList = ['Chivas', 'Martell', "Ballantile's"];
const tableHeader = {
	date: '窜货二维码',
	message: 'SKU',
	detail: '窜货量'
};

const tableData = [
	{
		date: '#1SAFD22',
		message: '马爹利名士700ml',
		detail: '17'
	},
	{
		date: '#2FASDF',
		message: '芝华士12年700ml',
		detail: '17'
	},
	{
		date: '#1SAFD22',
		message: '芝华士12年700ml（无盒）',
		detail: '15'
	},
	{
		date: '#1SAFD22',
		message: '马爹利1000ml',
		detail: '13'
	},
	{
		date: '#1SAFD22',
		message: '百龄坛700ml',
		detail: '9'
	}
];

const LHLHActivitySubPage = () => (
	<div className="page">
		<div className="card">
			<ProductGroupCard title="产品组" groupList={groupList} />
		</div>
		<div className="card">
			<TitleWithTime title="窜货量" />
			<MapWithDataStatistics
				num="103"
				up="3"
				text="家店铺11月相比10月"
				chartData={data}
			/>
		</div>
		<div className="card">
			<HistoryRecordCard
				title=""
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
		data: ['W43', 'W45', 'W47', 'W49']
	},
	yAxis: [
		{
			type: 'value',
			splitNumber: 3,
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
