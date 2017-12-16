import React, { Component } from 'react';
import { connect } from 'react-redux';

import LineChart from '../Charts/LineChart/LineChart';
import CardWithHead from './CommonCards/CardWithHead';
import BarWithLink from './CommonCards/BarWithLink';
import { goodActions } from '../../actions/goodAction';

const goodProducts = class extends Component {
	constructor(props) {
		super(props);
		this.props.dispatch(goodActions.getAggregationGoods('good_produced'));
	}

	render() {
		let goodsAggregation = this.props.goodsAggregation;
		let lineChartXAxis = [];
		let data = [];
		let sum = 0;
		if (goodsAggregation) {
			goodsAggregation.forEach(good => {
				lineChartXAxis.push(
					new Date(good.date).toLocaleString().substring(0, 10)
				);
				data.push(good.sum);
				sum = sum + good.sum;
			});
		}
		let sumTip = '共' + sum + '个订单';
		const barTips = [sumTip];
		const groupList = ['Chivas', 'Martell', "Ballantile's"];

		return (
			<div>
				{/* <div className="card">
					<BarWithLink tips={barTips} />
				</div> */}

				<div className="card">
					<ProductGroupCard title="" groupList={groupList} />
					<TimeTab timeTab="week" />
					<CardWithHead title="产品生产走势" tips={tips} />
					<LineChart lineChartXAxis={lineChartXAxis} data={data} />
				</div>
			</div>
		);
	}
};

const tips = ['最近七天'];

function mapStateToProps(state) {
	const { goodsAggregation, msg } = state.goodReducer;
	return {
		goodsAggregation,
		msg
	};
}

const GoodProducts = connect(mapStateToProps)(goodProducts);
export default GoodProducts;
