import React, { Component } from 'react';
import {
	DisplayCustomerWithForward,
	CustomerLink
} from '../Cards/CustomerInfoCard';

import './CustomerMoreSubPage.css';
import integrity from '../../images/integrity.png';
import elm from '../../images/elm.png';
import meituan from '../../images/meituan.png';

const CustomerMoreSubPage = class extends Component {
	render() {
		let customers = [
			{
				avartar: elm
			},
			{
				avartar: meituan
			}
		];
		let customer = this.props.customer || {};
		return (
			<div className="page" style={this.props.style}>
				<DisplayCustomerWithForward
					title="腾讯地图"
					customer={customer}
					type="tecentMap"
				/>
				<DisplayCustomerWithForward
					title="天眼查"
					customer={customer}
					picture={integrity}
					type="integrity"
				/>
				<DisplayCustomerWithForward
					title="大众点评"
					customer={customer}
					picture="none"
					type="daZhongDianPing"
				/>
				<CustomerLink title="创建更多链接" objects={customers} />
			</div>
		);
	}
};

export default CustomerMoreSubPage;
