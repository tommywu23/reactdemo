import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Home } from '../../Home';
import '../Card.css';
import nextSvg from '../../../images/next.svg';

const BarWithLink = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageType: ''
		};
	}
	render() {
		return this.state.pageType ? (
			<Home pageType={this.state.pageType} />
		) : (
			<div className="link-bar">
				{this.props.src ? <img src={this.props.src} alt="" /> : null}
				{this.props.strong === 'strong' ? (
					<span className="font-content-strong">{this.props.tips}</span>
				) : (
					<span className="font-content">{this.props.tips}</span>
				)}
				<span>{this.props.midTip}</span>
				{this.props.toPage ? (
					<Link to={this.props.toPage}>
						<div style={{ float: 'right', right: '40px' }}>
							<span className="font-content-title">查看全部</span>
							<img
								style={{
									position: 'absolute',
									float: 'right',
									right: '-45px',
									top: '-15px'
								}}
								src={nextSvg}
								alt=""
							/>
						</div>
					</Link>
				) : null}
			</div>
		);
	}
};

export default BarWithLink;
