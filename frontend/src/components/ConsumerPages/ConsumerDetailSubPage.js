import React from 'react';
import {
	DisplayCardArray,
	DisplayCustomCategorySingle
} from '../Cards/CustomerInfoCard';
import HistoryRecordCard from '../Cards/HistoryRecordCard';

import chengxinDengji from '../../images/chengxin-dengji.png';
import salesSunyiming from '../../images/salesSunyiming.png';
import oneConsumerPng from '../../images/one-consumer.png';

const ConsumerDetailSubPage = () => (
	<div className="page">
		<DisplayCardArray title="" objects={customer.detail} />
		<DisplayCustomCategorySingle
			title="用户标签"
			objects={customer.userLabel}
			needOneMore
		/>
		<div className="card">
			<div>腾讯资料</div>
			<div className="mar-up-down-10">
				<img src={oneConsumerPng} />
			</div>
			<div className="hr-full-card" />
			<div className="mar-up-down-10">
				<div>
					微信号：<strong>明月可心(拒加群)</strong>
				</div>
				<div>微信帐号：mykx1990</div>
			</div>
			<div className="hr-full-card" />
			<div className="mar-up-down-10">
				<div className="mar-up-down-10">腾讯诚信等级</div>
				<div className="text-center">
					<img src={chengxinDengji} />
				</div>
			</div>
			<div className="hr-full-card" />
			<div className="mar-up-down-10">
				<div className="mar-up-down-10">关联公众号</div>
				<div className="mar-up-down-10">
					<img className="user-head-portrait" src={salesSunyiming} /> 腾讯
				</div>
				<div className="mar-up-down-10">
					<img className="user-head-portrait" src={salesSunyiming} /> 腾讯
				</div>
				<div className="mar-up-down-10">
					<img className="user-head-portrait" src={salesSunyiming} /> 腾讯
				</div>
				<div className="mar-up-down-10">
					<img className="user-head-portrait" src={salesSunyiming} /> 腾讯
				</div>
				<div className="mar-up-down-10">
					<img className="user-head-portrait" src={salesSunyiming} /> 腾讯
				</div>
			</div>
		</div>
		<div className="card">
			<div>阿里资料</div>
			<div className="mar-up-down-10">
				<img src={oneConsumerPng} />
			</div>
			<div className="hr-full-card" />
			<div className="mar-up-down-10">
				<div>
					微信号：<strong>明月可心(拒加群)</strong>
				</div>
				<div>微信帐号：mykx1990</div>
			</div>
			<div className="hr-full-card" />
			<div className="mar-up-down-10">
				<div className="mar-up-down-10">腾讯诚信等级</div>
				<div className="text-center">
					<img src={chengxinDengji} />
				</div>
			</div>
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

const customer = {
	detail: [
		'姓名：孙志',
		'创建于：2017.05.29',
		'手机号：138-9839-1047',
		'电子邮箱：qwefjn132@qq.com',
		'',
		'',
		'地址：上海市浦东新区峨山路404号',
		'角色：店长',
		'门店名称：Taoker Bar酒吧(武定店)'
	],
	userLabel: ['90后', '上海新天地', '活动组织者']
};
export default ConsumerDetailSubPage;
