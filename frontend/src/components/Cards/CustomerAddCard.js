import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './Card.css';
import './CustomerAddCard.css';
import { Link } from 'react-router-dom';

const CustomerAddCard = class CustomerAddCard extends Component {
	componentWillMount() {}

	render() {
		let customers = this.props.customerList;
		return (
			<div className="card">
				<CustomerQuery />
				<CustomerLatest customers={customers} msg={this.props.msg} />
			</div>
		);
	}
};

class CustomerQuery extends Component {
	constructor(props) {
		super(props);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	handleFocus(e) {
		e.target.placeholder = '';
	}
	handleBlur(e) {
		e.target.placeholder = '	搜索';
	}
	onChange(e) {
		if (e.target.value !== '') {
		}
	}
	render() {
		return (
			<div className="query-head">
				<div className="font-content-title">添加客户</div>
				<div className="add-button">
					<Button bsStyle="primary">
						<Glyphicon glyph="plus" />
						<span> </span>
						新建客户
					</Button>
				</div>
			</div>
		);
	}
}

class CustomerLatest extends Component {
	render() {
		const customers = this.props.customers;
		const itemList = customers
			? customers.map((customer, index) => (
					<Link key={index.toString()} to={'/customerGeneral/' + customer.id}>
						<li>{customer.name}</li>
					</Link>
				))
			: '';
		return (
			<div>
				<div className="font-content-title latest-name">最新数据</div>
				<div className="font-content-title latest-name">{this.props.msg}</div>
				<ul className="font-content list-col-customer">{itemList}</ul>
			</div>
		);
	}
}

export { CustomerAddCard };
