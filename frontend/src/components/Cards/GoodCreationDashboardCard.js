import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goodActions } from '../../actions/goodAction';
import intl from 'react-intl-universal';

import './GoodCreationDashboardCard.css';

import LineChart from '../Charts/LineChart/LineChart';
import ProductGroupCard from '../Cards/ProductGroupCard';
import TimeTab from '../Cards/TimeTab';
import StatisticsBlock from '../Cards/StatisticsBlock';
import GoodCreationRecordCard from '../Cards/GoodCreationRecordCard';

let mode = '';

const GoodCreationDashboardCard = class extends Component {
	constructor(props) {
		super(props);
		switch (this.props.parent) {
			case 'GoodProducts':
				this.props.dispatch(goodActions.getAggregationGoods('good_produced'));
				break;
			case 'PackagingProducts':
				this.props.dispatch(
					goodActions.getAggregationGoods('packaging_produced')
				);
				break;
			case 'TagProducts':
				this.props.dispatch(goodActions.getAggregationGoods('tag_produced'));
				break;
			default:
		}
	}

	componentWillReceiveProps() {
		console.log(1 + mode);
		console.log(2 + this.props.parent);
		if (mode == this.props.parent) return;
		mode = this.props.parent;
		console.log(3 + mode);
		switch (mode) {
			case 'GoodProducts':
				this.props.dispatch(goodActions.getAggregationGoods('good_produced'));
				break;
			case 'PackagingProducts':
				this.props.dispatch(
					goodActions.getAggregationGoods('packaging_produced')
				);
				break;
			case 'TagProducts':
				this.props.dispatch(goodActions.getAggregationGoods('tag_produced'));
				break;
			default:
		}
	}

	render() {
		let goodsAggregation = this.props.goodsAggregation;
		let lineChartXAxis = [];
		let data = [];
		let sum = 0;
		let tips = [intl.get('last.week')];
		let name = '';
		let title = '';
		let tableTitle = '';
		let tableHeader = ['时间', '产量', 'SKU', 'SessionID', '操作', '状态', '操作员'];

		let tableData = [
			{
				date: '2017.10.02 11:22:16',
				yield: '1,290',
				sku: '百龄坛特醇500ml',
				sessionID: 'ED482945210R',
				op: '生产',
				status: '已完成',
				oper: '胡大伟'
			},
			{
				date: '2017.10.02 11:22:16',
				yield: '1,200',
				sku: '百龄坛特醇500ml',
				sessionID: 'ED482945210R',
				op: '生产',
				status: '已完成',
				oper: '胡大伟'
			},
			{
				date: '2017.10.02 11:22:16',
				yield: '1,090',
				sku: '百龄坛特醇500ml',
				sessionID: 'ED482945210R',
				op: '生产',
				status: '已完成',
				oper: '胡大伟'
			},
			{
				date: '2017.10.02 11:22:16',
				yield: '890',
				sku: '百龄坛特醇500ml',
				sessionID: 'ED482945210R',
				op: '生产',
				status: '已完成',
				oper: '胡大伟'
			},
			{
				date: '2017.10.02 11:22:16',
				yield: '1,020',
				sku: '百龄坛特醇500ml',
				sessionID: 'ED482945210R',
				op: '生产',
				status: '已完成',
				oper: '胡大伟'
			}
		];

		switch (this.props.parent) {
			case 'GoodProducts':
				name = intl.get('good.product');
				break;
			case 'PackagingProducts':
				name = intl.get('good.packaging');
				tableHeader = ['时间', '计划产量', '实际产量', 'SKU', 'SessionID', '状态', '操作员'];
				tableData = [
					{
						date: '2017.10.02 11:22:16',
						yield: '100',
						yield: '104',
						sku: '百龄坛特醇500ml',
						sessionID: 'ED482945210R',
						status: '未开始',
						oper: '胡大伟'
					},
					{
						date: '2017.10.02 11:22:16',
						yield: '100',
						yield: '100',
						sku: '百龄坛特醇500ml',
						sessionID: 'ED482945210R',
						status: '未开始',
						oper: '胡大伟'
					}
				];
				break;
			case 'TagProducts':
				name = intl.get('good.tag');
				tableHeader = ['时间', '产量', 'SessionID', '操作', '状态', '操作员'];
				tableData = [
					{
						date: '2017.10.02 11:22:16',
						yield: '100',
						sessionID: 'ED482945210R',
						op: '生产标签',
						status: '已结束',
						oper: '胡大伟'
					},
					{
						date: '2017.10.02 11:22:16',
						yield: '100',
						sessionID: 'ED482945210R',
						op: '生产标签',
						status: '已结束',
						oper: '胡大伟'
					}
				];
				break;
			default:
		}

		title = name + intl.get('yield');
		tableTitle = name + intl.get('good.creation') + intl.get('history');

		if (goodsAggregation) {
			goodsAggregation.forEach(good => {
				lineChartXAxis.push(
					new Date(good.date).toLocaleString().substring(0, 10)
				);
				data.push(good.sum);
				sum = sum + good.sum;
			});
		}

		const groupList = ['Chivas', 'Martell', "Ballantile's"];
		let sumTip = intl.get('total') + ' ' + sum + ' ' + intl.get('unit') + name;
		const barTips = [sumTip];
		return (
			<div>
				<div className="card">
					<ProductGroupCard groupList={groupList} />
					<TimeTab timeTab="day" />

					<div className="block">
						<StatisticsBlock
							num="142"
							up="22"
							text="箱 (产品)W49<br>相比W48"
							statistic="共"
						/>
						<LineChart lineChartXAxis={lineChartXAxis} data={data} />
					</div>
				</div>
				<div className="big-size-card">
					<GoodCreationRecordCard
						title={tableTitle}
						highlight=""
						tableData={tableData}
						headerList={tableHeader}
					/>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	const { goodsAggregation, msg } = state.goodReducer;
	return {
		goodsAggregation,
		msg
	};
}

const goodCreationDashboardCard = connect(mapStateToProps)(
	GoodCreationDashboardCard
);
export default goodCreationDashboardCard;
