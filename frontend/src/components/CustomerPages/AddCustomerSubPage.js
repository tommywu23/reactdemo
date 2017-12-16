import React, { Component } from 'react';

import './AddCustomerSubPage.css';
import { CustomerAddCard } from '../Cards/CustomerAddCard';

const AddCustomerSubPage = class extends Component {
	render() {
		return (
			<div>
				<CustomerAddCard
					customerList={this.props.customers}
					msg={this.props.msg}
				/>
			</div>
		);
	}
};

export default AddCustomerSubPage;
