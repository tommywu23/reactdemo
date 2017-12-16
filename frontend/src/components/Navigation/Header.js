import React, { Component } from 'react';

import './Header.css';

const Header = class extends Component {
	render() {
		if (this.props.linkName !== undefined) {
			return (
				<div className="navigation-header-col">
					<div className="col-show col-header">
						<i className="icon icon-left" />
						<img src={this.props.icon} alt={this.props.icon} />
						<span className="text font-navigation-explain">
							{this.props.linkName}
						</span>
					</div>
					<div className="col-main">
						<span className="font-navigation-title1">
							{this.props.titleName}
						</span>
					</div>
				</div>
			);
		} else {
			return (
				<div className="navigation-header">
					<i className="icon icon-left" />
					<img src={this.props.icon} alt={this.props.icon} />
					<span
						className="navigation-text font-navigation-title1"
						style={{ fontSize: this.props.type === 'consumer' ? '28px' : '' }}
					>
						{this.props.titleName}
					</span>
				</div>
			);
		}
	}
};

export default Header;
