import React, { Component } from 'react';

import ScatterChinaMap from '../Charts/Map/ScatterChinaMap';
import BarWithLink from './CommonCards/BarWithLink';

import './Card.css';
import './CustomerMapCard.css';

const CustomerMap = class extends Component {
	render() {
		let data = this.props.data || [];
		barTips = this.props.barTips || [];
		return (
			<div>
				<div className="card">
					<span className="font-content-title">客户地图</span>
					{/* <div style={{ marginTop: '50px' }}>
						<BarWithText tips={['全部类型', '餐厅', '酒吧', 'KTV']} selected="全部类型" />
						<hr style={{ margin: '15px 0', width: '100%' }} />
						<BarWithText
							tips={['全国', '华东', '华北', '华中', '华南', '西南', '西北', '东北']}
							selected="全国"
						/>
						<hr style={{ margin: '15px 0', width: '100%' }} />
						<BarWithText tips={['全部', '1年', '1个月', '1周', '1天']} selected="1周" />
					</div> */}
					<div style={{ marginTop: '15px' }}>
						<ScatterChinaMap data={data} />
					</div>
				</div>
				<div className="card">
					<BarWithLink tips={barTips} />
				</div>
			</div>
		);
	}
};

// const BarWithText = p => (
// 	<div className="bar-tags">
// 		{p.tips.map(
// 			(tip, i) =>
// 				p.selected === tip ? (
// 					<span
// 						className="border-selected tag"
// 						style={{ marginRight: '30px' }}
// 						key={i}
// 					>
// 						{tip}
// 					</span>
// 				) : (
// 					<span className="tag" style={{ marginRight: '30px' }} key={i}>
// 						{tip}
// 					</span>
// 				)
// 		)}
// 	</div>
// );

let barTips = [];

export default CustomerMap;
