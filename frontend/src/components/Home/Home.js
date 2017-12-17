import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { history } from '../../utils';
import intl from 'react-intl-universal';

import './Home.css';
const customerStatisticsLogo = require('../../images/customer-general-icon.png');
const goodStatisticsLogo = require('../../images/good-statistics-icon.png');
const consumerStatisticsLogo = require('../../images/consumer-statistics-icon.png');

const homeBottom1 = require('../../images/homepage-bottom4.png');
const homeBottom2 = require('../../images/homepage-bottom3.png');
const homeBottom3 = require('../../images/homepage-bottom2.png');
const homeBottom4 = require('../../images/homepage-bottom1.png');

const Home = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageType: null
		};
	}

	render() {
		const customerStatisticsText = intl.get('customer.statistics');
		const goodStatisticsText = intl.get('good.statistics');
		const consumerStatisticsText = intl.get('consumer.statistics');
		return (
			<div className="home">
				<div className="main-board" ref="mainBoard">
					{/* <h1>Tenant Id: {auth.tenantId}</h1> */}
					{/* <div className="main-board-app" style={{ display: 'none' }}>
						<div className="app" align="center">
							<img className="icon" src={customerStatisticsLogo} alt="" />
							<span className="app-text">{customerStatisticsText}</span>
						</div>
						<div className="app" align="center">
							<img className="icon" src={goodStatisticsLogo} alt="" />
							<span className="app-text">{goodStatisticsText}</span>
						</div>
						<div className="app" align="center">
							<img className="icon" src={consumerStatisticsLogo} alt="" />
							<span className="app-text">{consumerStatisticsText}</span>
						</div>
					</div> */}
					<div ref="appClickable" className="main-board-app">
						<div className='app-box'>
							<div className="app" align="center">
								<Link to="/CustomerStatistics" style={{ textDecoration: 'none' }}>
									<img className="icon" src={customerStatisticsLogo} alt="" />
									<span className="app-text font-app-title">
									{customerStatisticsText}
								</span>
								</Link>
							</div>
							<div className="app" align="center">
								<Link to="/goodStatistics" style={{ textDecoration: 'none' }}>
									<img className="icon" src={goodStatisticsLogo} alt="" />
									<span className="app-text font-app-title">
									{goodStatisticsText}
								</span>
								</Link>
							</div>
							<div className="app" align="center">
								<Link to="/consumerStatistics" style={{ textDecoration: 'none' }}>
									<img className="icon" src={consumerStatisticsLogo} alt="" />
									<span className="app-text font-app-title">
									{consumerStatisticsText}
								</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="main-board-bottom">
						<div className="main-board-box">
							<div className="normal-head font-app-title">常用的页面</div>
							<div className="normal font-content-link clearfix">
								<img src={homeBottom1}/>
								<span>最近数据</span>	
							</div>
							<div className="normal font-content-link clearfix">
								<img src={homeBottom2}/>
								<span>门店成员</span>
							</div>
							<div className="normal font-content-link clearfix">
								<img src={homeBottom3}/>
								<span>库存</span>
							</div>
							<div className="normal font-content-link clearfix">
								<img src={homeBottom4}/>
								<span>窜货</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	const { auth } = state.authentication;
	return {
		auth
	};
}

const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as Home };
