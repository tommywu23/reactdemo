import React, { Component } from 'react';
import './Subcompany.css';
import './CommonCards/Head.css';

export default class Subcompany extends Component {
	constructor(props) {
		super(props);
		this.state = { subcompany: '' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			subcompany: <li>子公司</li>
		});
	}

	render() {
		return (
			<div className="card font-content-title">
				<div className="card-head-title">子公司</div>
				<button
					className="add-subcompany font-content"
					onClick={this.handleClick}>
					+添加子公司
				</button>
				<ul className="list-col-subcompany font-content">
					{this.state.subcompany}
				</ul>
			</div>
		);
	}
}
