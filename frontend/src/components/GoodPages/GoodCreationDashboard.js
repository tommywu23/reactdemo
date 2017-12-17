import React, { Component } from 'react';
import intl from 'react-intl-universal';

import './GoodCreationDashboard.css';

import GoodCreationDashboardCard from '../Cards/GoodCreationDashboardCard';

const GoodCreationDashboard = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'GoodProducts'
		};
		this.handleCreation = this.handleCreation.bind(this);
	}

	handleCreation(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<div className="page">
				<div className="card">
					<select
						id="creation"
						value={this.state.value}
						onChange={this.handleCreation}
					>
						<option value="GoodProducts">
							{intl.get('good.product') + intl.get('yield')}
						</option>
						<option value="PackagingProducts">
							{intl.get('good.packaging') + intl.get('yield')}
						</option>
						<option value="TagProducts">
							{intl.get('good.tag') + intl.get('yield')}
						</option>
					</select>
				</div>
				<GoodCreationDashboardCard parent={this.state.value} />
			</div>
		);
	}
};

export default GoodCreationDashboard;
