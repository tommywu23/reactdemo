import React, { Component } from 'react';

import './GoodConsumptionSubPage.css';
import { Members } from '../Cards/CustomerInfoCard';
import { ProductAddress } from '../Cards/GoodCard';

const GoodConsumptionSubPage = class extends Component {
	render() {
		const goodEvents = this.props.goodEvents;
		let members = [];
		if (goodEvents) {
			goodEvents.forEach(event => {
				if (event.operationType === 'CONSUMPTION') {
					if (event.consumer) {
						let member = {};
						member.avatarImageUrl = event.consumer.avatarImageUrl;
						member.name = event.consumer.name;
						member.year = new Date(event.consumer.createDate)
							.toLocaleString()
							.substring(0, 10);
						member.time = new Date(event.consumer.createDate)
							.toLocaleString()
							.substring(10, 16);
						members.push(member);
					}
				}
			});
		}
		let objects = {
			url: '/images/addressmap.png'
		};
		return (
			<div className="page">
				<Members title="货物Owners" objects={members} type={'goodOwners'} />
				<ProductAddress title="货物地址" objects={objects} />
			</div>
		);
	}
};

export default GoodConsumptionSubPage;
