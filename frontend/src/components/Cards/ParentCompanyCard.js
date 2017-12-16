import React, { Component } from 'react';
import './ParentCompanyCard.css';
import './CommonCards/Head.css';

export default class ParentCompany extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('edit this info!');
	}

	render() {
		const companies = this.props.companies;
		const itemList = companies.map(company => (
			<li key={company.toString()}>{company}</li>
		));
		return (
			<div className="card">
				<div className="card-head-title">母公司</div>
				<button
					className="edit-company"
					type="button"
					onClick={this.handleClick}
				>
					<img src="images/edit.png" alt="edit" />
				</button>
				<ul className="list-col-company">{itemList}</ul>
			</div>
		);
	}
}
