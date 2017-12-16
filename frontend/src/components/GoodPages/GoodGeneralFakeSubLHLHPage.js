import React from 'react';
import BarWithLink from '../Cards/CommonCards/BarWithLink';
import './GoodGeneralFakeSubLHLHPage.css';

const GoodGeneralFakeSubLHLHPage = () => (
	<div className="page">
		<div className="card">
			<div className="font-content-title title">假货情况</div>
			<div className="font-content content">假货量: 38,291</div>
			<div className="font-content content">2017年3月28日 21:36:11 被判定为假货</div>
		</div>
		<div className="card">
			<BarWithLink tips={barTips} strong="strong" toPage="have" />
		</div>
	</div>
);

const barTips = ['3,382个扫描的消费者'];

export default GoodGeneralFakeSubLHLHPage;
