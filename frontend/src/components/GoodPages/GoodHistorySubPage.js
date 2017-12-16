import React, { Component } from 'react';

import './GoodHistorySubPage.css';
import { TimeLine } from '../Cards/CustomerInfoCard';

const GoodHistorySubPage = class extends Component {
	render() {
		const title = '时间轴';
		const goodEvents = this.props.goodEvents;
		let objects = [];
		console.log(goodEvents);
		goodEvents.forEach(item => {
			let map = {};
			map.scanDate = new Date(item.createdAt).toLocaleString();
			map.scanUser =
				item.operationType +
				' by ' +
				item.user.firstName +
				' ' +
				item.user.lastName;
			objects.push(map);
		});
		return (
			<div className="page" style={this.props.style}>
				<TimeLine title={title} objects={objects} />
			</div>
		);
	}
};

export default GoodHistorySubPage;
