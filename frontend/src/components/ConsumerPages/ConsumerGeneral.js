import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Item from '../Navigation/Item';
import Header from '../Navigation/Header';
import ConsumerDetailSubPage from './ConsumerDetailSubPage';
import ConsumerHulkSubPage from './ConsumerHulkSubPage';

import consumerStatisticsLogo from '../../images/consumer-statistics-icon.png';
import goodHistoryPic from '../../images/good-history.svg';
import HulkSvgGray from '../../images/grayHulk.svg';
import HulkSvgWhite from '../../images/whiteHulk.svg';

const ConsumerGeneral = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigatePage: 'consumerDetail',
			returnToMain: false
		};
	}

	componentWillUnmount() {}

	render() {
		return (
			<div className="layout">
				<div className="navigation">
					<Link to="/consumerStatistics" style={{ textDecoration: 'none' }}>
						<Header titleName="消费者统计" icon={consumerStatisticsLogo} />
					</Link>
					<ul className="navigation-list navigation-top">
						<Item
							id="consumerDetail"
							itemType="detailItemType"
							className="place-item"
							icon={consumerStatisticsLogo}
							selected={this.state.navigatePage === 'consumerDetail' ? true : false}
							locationName="Jared Mullins"
							text="GWOODS"
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-medium">
						<Item
							name="Hulk"
							id="consumerHulk"
							count="9,201"
							selected={this.state.navigatePage === 'consumerHulk' ? true : false}
							icon={HulkSvgGray}
							grayIcon={HulkSvgWhite}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
				</div>
				<div className="main">
					{this.state.navigatePage === 'consumerDetail' ? (
						<ConsumerDetailSubPage goodMasters={this.props.goodMasters} />
					) : null}
					{this.state.navigatePage === 'consumerHulk' ? (
						<ConsumerHulkSubPage goodMasters={this.props.goodMasters} />
					) : null}
				</div>
			</div>
		);
	}
};

export default ConsumerGeneral;
