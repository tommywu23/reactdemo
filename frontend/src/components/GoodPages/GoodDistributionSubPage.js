import React, { Component } from 'react';

import './GoodDistributionSubPage.css';
import ProductGroupCard from '../Cards/ProductGroupCard';
import GoodCreationRecordCard from '../Cards/GoodCreationRecordCard';

const groupList = ['上海市海关1号仓库', '上海市中远物流仓库'];

const GoodDistributionSubPage = class extends Component {
	render() {
		let tableHeader = ['货物情况', '用户', '创建时间', '订单号', '送达地址', '货物总数', '扫描总数', '状态'];
		let tableData = [
			{
				yield: '发货9',
				date: 'Tommy',
				sku: '2017.10.02',
				sessionID: 'ED482944210R',
				op: '发货地址:深圳市太阳城1号仓库 收货地址：上海市四行仓库',
				count: '7000',
				oper: '7000',
				status: '未发货'
			},
			{
				yield: '发货9',
				date: 'Tommy',
				sku: '2017.10.02',
				sessionID: 'ED782945210R',
				op: '发货地址:深圳市太阳城1号仓库 收货地址：上海市四行仓库',
				count: '7000',
				oper: '7000',
				status: '运输中'
			},
			{
				yield: '发货9 退货1',
				date: 'Tommy',
				sku: '2017.10.02',
				sessionID: 'ED482925210R',
				op: '发货地址:深圳市太阳城1号仓库 收货地址：上海市四行仓库',
				count: '7000',
				oper: '7000',
				status: '已完成'
			}
		];

		return (
			<div className="page">
				<div className="big-size-card">
					<ProductGroupCard title="物流历史记录" groupList={groupList} />
				</div>
				<div className="big-size-card">
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
