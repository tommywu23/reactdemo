import React, { Component } from 'react';
import {
	DisplayCardArray,
	DisplayCustomCategorySingle
} from '../Cards/CustomerInfoCard';
import HistoryRecordCard from '../Cards/HistoryRecordCard';
import TitleWithTime from '../Cards/TitleWithTime';
import PieChart from '../Charts/PieChart/PieChart';

import editSvg from '../../images/edit.svg';

const ConsumerHulkSubPage = class extends Component {
	constructor(props) {
		super(props);
	}

	selectTimeTab() {
		alert(1);
	}

	render() {
		return (
			<div className="page">
				<DisplayCardArray
					title="积分和等级"
					objects={customer.detail}
					withEdit="withEdit"
				/>
				<div className="card">
					<TitleWithTime
						title="交易情况"
						selectTimeTab={this.selectTimeTab.bind(this)}
					/>
					<PieChart data={pieData} dataName="访问来源" legendData={legendData} />
					<span
						style={{ marginTop: '-30px', display: 'block', marginLeft: '70px' }}
					>
						W49【12/04-12/10】
					</span>
					<span style={{ marginLeft: '70px' }}>
						相比W48<span className="red-text">↑18%</span>
					</span>
					<HistoryRecordCard
						title="操作记录"
						tableHeader={tableHeader}
						tableData={tableData}
					/>
				</div>
			</div>
		);
	}
};

let ownActivities = [];

const tableHeader = {
	date: '时间',
	message: '交易类型',
	detail: 'SKU'
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

let pieData = [
	{ value: 39, name: '芝华士500ml' },
	{ value: 4, name: '百龄坛特醇700ml' },
	{ value: 4, name: '马爹利 鼎盛干邑白兰地700ml' },
	{ value: 3, name: '百龄坛12年苏格兰威士忌700ml' },
	{ value: 3, name: 'Martell马爹利蓝带干邑白兰地700ml' }
];
let legendData = [
	'芝华士500ml',
	'百龄坛特醇700ml',
	'马爹利 鼎盛干邑白兰地700ml',
	'百龄坛12年苏格兰威士忌700ml',
	'Martell马爹利蓝带干邑白兰地700ml'
];

const customer = {
	detail: ['等级：黄金会员', '总积分：29,900', '已用积分：20,000', '现有积分：9,900', '兑换数量：5']
};

export default ConsumerHulkSubPage;
