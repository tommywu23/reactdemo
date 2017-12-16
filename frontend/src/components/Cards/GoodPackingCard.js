import React, { Component } from 'react';
import { connect } from 'react-redux';

import LineChart from '../Charts/LineChart/LineChart';
import CardWithHead from './CommonCards/CardWithHead';
import BarWithLink from './CommonCards/BarWithLink';
import { goodActions } from '../../actions/goodAction';

const goodPacking = class extends Component {
	constructor(props) {
		super(props);
		this.props.dispatch(goodActions.getAggregationGoods('good_produced'));
	}

	render() {
		console.log(this.props.goodsAggregation);
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
		return (
			<div className="page">
				<div className="card">
					<BarWithLink
						tips={barTips}
						pageType="goodGeneral"
						toPage="/GoodGeneral"
					/>
				</div>
				<div className="card">
					<CardWithHead title="包装生产走势" tips={tips} />
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

const GoodPacking = connect(mapStateToProps)(goodPacking);
export default GoodPacking;
