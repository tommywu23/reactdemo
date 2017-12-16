import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Head.css';

const CardWithHead = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		var showBodyText = ReactDOM.findDOMNode(this.refs.showBodyText);
		if ('none' === showBodyText) {
			showBodyText.innerHTML = '收起';
		} else {
			showBodyText.innerHTML = '展开';
		}

		event.stopPropagation();
		event.preventDefault();
	}

	render() {
		//const charts = this.props.chart;
		return (
			<div>
				<div className="card-head">
					<span className="font-content-title">{this.props.title}</span>
					{this.props.title1 ? (
						<span style={{ marginLeft: '50px' }}>{this.props.title1}</span>
					) : null}
					{this.props.title2 ? (
						<span style={{ marginLeft: '50px' }}>{this.props.title2}</span>
					) : null}
					<div style={{ marginTop: '15px' }} />
					{this.props.tips.map((tip, i) => (
						<div style={{ display: 'inline', color: '#0378fe' }} key={i}>
							{i !== 0 ? <span style={{ margin: '0 15px' }}>●</span> : ''}
							<div className="card-head-tip">{tip}</div>
						</div>
					))}
					<div className="card-head-show-button">
						{/* <span ref="showBodyText">展开</span> */}
						{/* <div style={{ left: '55px', bottom: '7px' }}>
							<span
								className="triangle-border-down"
								onClick={event => this.handleClick(event)}
							/>
						</div> */}
					</div>
				</div>
				<hr style={{ margin: '15px 0', width: '100%' }} />
			</div>
		);
	}
};

export default CardWithHead;
