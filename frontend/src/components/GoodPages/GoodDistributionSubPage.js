import React, { Component } from 'react';

import './GoodDistributionSubPage.css';
import ProductGroupCard from '../Cards/ProductGroupCard';
import GoodCreationRecordCard from '../Cards/GoodCreationRecordCard';
import intl from 'react-intl-universal';
const groupList = ['上海市海关1号仓库', '上海市中远物流仓库'];

const GoodDistributionSubPage = class extends Component {
	render() {
		// let tableHeader = ['货物情况', '用户', '创建时间', '订单号', '送达地址', '货物总数', '扫描总数', '状态'];
		let tableHeader = [
			{
			name:"物流类型",
			col:'110'
		},
		{
			name:"ID",
			col:'100'
		},
		{
			name:"地址",
			col:'340'
		},
		{
			name:"日期",
			col:'140'
		},
		{
			name:"总量(只)",
			col:'100'
		},
		// {
		// 	name:"货物总数",
		// 	col:'110'
		// },
		// {
		// 	name:"扫描总数",
		// 	col:'110'
		// },
		{
			name:"状态",
			col:'90'
		},
		
		];
		// let tableData = [
		// 	{
		// 		yield: '发货9',
		// 		date: 'Tommy',
		// 		sku: '2017.10.02',
		// 		sessionID: 'ED482944210R',
		// 		op: '发货地址:深圳市太阳城1号仓库 收货地址：上海市四行仓库',
		// 		count: '7000',
		// 		oper: '7000',
		// 		status: '未发货'
		// 	},
		// 	{
		// 		yield: '发货9',
		// 		date: 'Tommy',
		// 		sku: '2017.10.02',
		// 		sessionID: 'ED782945210R',
		// 		op: '发货地址:深圳市太阳城1号仓库 收货地址：上海市四行仓库',
		// 		count: '7000',
		// 		oper: '7000',
		// 		status: '运输中'
		// 	},
		// 	{
		// 		yield: '发货9 退货1',
		// 		date: 'Tommy',
		// 		sku: '2017.10.02',
		// 		sessionID: 'ED482925210R',
		// 		op: '发货地址:深圳市太阳城1号仓库 收货地址：上海市四行仓库',
		// 		count: '7000',
		// 		oper: '7000',
		// 		status: '已完成'
		// 	}
		// ];

		let tableData = [
			{
				tType: 'CBD',
				tId: '128949827',
				tAddr: '天津RDC',
				tDate: '2017年12月11日',
				tAll: '600',
				tStatus: '有问题',
				tStatusEn:"waring"
			},
			{
				tType: 'CBD',
				tId: '128949827',
				tAddr: '天津RDC',
				tDate: '2017年12月11日',
				tAll: '600',
				tStatus: '运输中',
				tStatusEn:"success"
			},
			{
				tType: 'CBD',
				tId: '128949827',
				tAddr: '天津RDC',
				tDate: '2017年12月11日',
				tAll: '600',
				tStatus: '已完成',
				tStatusEn:"complete"
			},
		];
		return (
			<div className="page">
				<div className="big-size-card">
					<ProductGroupCard title="物流历史记录" groupList={groupList} />
				</div>
				{/* <div className="big-size-card"> */}
		
				{/* </div> */}

				<div className="big-size-card">
				<div className="goodStatistics-select goodStatistics-select-GoodDistributionSubPage">
					<div className="select-div">
						<span className="select-text">{intl.get('from')}</span>
						<select className="select">
							<option>2016年1月1日</option>
						</select>
					{/* </div>
					<div> */}
						<span className="select-text">{intl.get('to')}</span>
						<select className="select">
							<option>2017年1月1日</option>
						</select>
						<span className="query-button">{intl.get('search')}</span>
					</div>
				</div>
					<GoodCreationRecordCard
						title=""
						arrowHide="true"
						highlight="#2c8efe"
						tableData={tableData}
						headerList={tableHeader}
					/>
				</div>
			</div>
		);
	}
};

export default GoodDistributionSubPage;
