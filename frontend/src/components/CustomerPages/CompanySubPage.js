import React, { Component } from 'react';
import { ParentCompany } from '../Cards/CustomerInfoCard';
import Subcompany from '../Cards/Subcompany';

import './CompanySubPage.css';

const CompanySubPage = class extends Component {
	render() {
		let name = this.props.parentCustomer
			? this.props.parentCustomer.name
			: '暂无';
		let parentCompany = {
			name: name
		};
		return (
			<div className="page" style={this.props.style}>
				<ParentCompany title="母公司" customer={parentCompany} />
				<Subcompany />
			</div>
		);
	}
};

export default CompanySubPage;
