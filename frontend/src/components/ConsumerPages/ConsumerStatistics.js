import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import intl from 'react-intl-universal';

import './ConsumerStatistics.css';

import Item from '../Navigation/Item';
import Header from '../Navigation/Header';
import LastConsumerSubPage from './LastConsumerSubPage';
import ConsumerStatisticsHulkSubPage from './ConsumerStatisticsHulkSubPage';

import consumerStatisticsLogo from '../../images/consumer-statistics-icon.png';
import goodHistoryPic from '../../images/good-history.svg';
import hulkSvg from '../../images/Hulk.svg';

const ConsumerStatistics = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigatePage: 'lastConsumer',
			returnToMain: false
		};
	}

	componentWillUnmount() {}

	render() {
		return (
			<div className="layout">
				<div className="navigation">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Header
							type="consumer"
							titleName={intl.get('consumer.statistics')}
							icon={consumerStatisticsLogo}
						/>
					</Link>
					<ul className="navigation-list navigation-top">
						<Item
							id="lastConsumer"
							count="6,2470"
							icon={goodHistoryPic}
							selected={
								this.state.navigatePage === 'lastConsumer' ? true : false
							}
							name="最新数据"
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-medium">
						<Item
							name="Hulk"
							id="consumerStatisticsHulk"
							selected={
								this.state.navigatePage === 'consumerStatisticsHulk'
									? true
									: false
							}
							icon={hulkSvg}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
				</div>
				<div className="main">
					{this.state.navigatePage === 'lastConsumer' ? (
						<LastConsumerSubPage />
					) : null}
					{this.state.navigatePage === 'consumerStatisticsHulk' ? (
						<ConsumerStatisticsHulkSubPage />
					) : null}
				</div>
			</div>
		);
	}
};

export default ConsumerStatistics;
