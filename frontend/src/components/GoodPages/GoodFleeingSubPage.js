import React, { Component } from 'react';

import './GoodFleeingSubPage.css';
import GoodFleeing from '../Cards/GoodFleeingCard';
import BarWithLink from '../Cards/CommonCards/BarWithLink';

const GoodFleeingPage = class extends Component {
	render() {
		const barTips = ['3,382个扫描的消费者'];
		return (
			<div className="page">
				<div className="card">
					<div className="font-content-title title">窜货情况</div>
					<div className="font-content content">窜货量: 38,291</div>
					<div className="font-content content">2017年3月28日 21:36:11 被判定为窜货</div>
				</div>
				<div className="card">
					<BarWithLink tips={barTips} strong="strong" toPage="have" />
				</div>
			</div>
		);
	}
};

export default GoodFleeingPage;
