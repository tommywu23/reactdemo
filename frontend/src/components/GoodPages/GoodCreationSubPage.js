import React, { Component } from 'react';

import './GoodCreationSubPage.css';

import GoodProducts from '../Cards/GoodProductsCard';
import DisplayPackageFocusMessage from '../Cards/GoodCard';

const GoodCreationSubPage = class extends Component {
	render() {
		let returnDOM;
		const goodCreationList = this.props.goodCreation;
		const goodCreation = goodCreationList ? goodCreationList[0] : {};
		let packages = [
			{
				className: 'black-font',
				operation: '生产日期:',
				message: goodCreation
					? new Date(goodCreation.createdAt).toLocaleString()
					: ''
			},
			{
				className: 'black-font',
				operation: '批次号:',
				message: goodCreation.eventId
			},
			{
				className: 'black-font',
				operation: '产地:',
				message: goodCreation.subdivision
			}
		];
		switch (this.props.parent) {
			case 'GoodProducts':
				returnDOM = <GoodProducts />;
				break;
			case 'GoodGeneralProducts':
				returnDOM = <DisplayPackageFocusMessage title="" packages={packages} />;
				break;
			default:
		}
		return <div className="page">
							<div className="card">
								<div className="font-content-title title">产品生产</div>
								{returnDOM}
							</div>
						</div>;
	}
};

export default GoodCreationSubPage;
