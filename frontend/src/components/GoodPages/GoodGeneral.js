import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './GoodGeneral.css';

import Item from '../Navigation/Item';
import Header from '../Navigation/Header';
import GoodDetailSubPage from './GoodDetailSubPage';
import GoodCreationSubPage from './GoodCreationSubPage';
import GoodDistributionSubPage from './GoodDistributionSubPage';
import GoodFakeSubPage from './GoodFakeSubPage';
import GoodFleeingSubPage from './GoodFleeingSubPage';
import GoodGeneralPackagingSubPage from './GoodGeneralPackagingSubPage';
import GoodConsumptionSubPage from './GoodConsumptionSubPage';
import SesameActivitySubPage from '../CommonPages/SesameActivitySubPage';
import GoodGeneralFakeSubLHLHPage from './GoodGeneralFakeSubLHLHPage';
import COActivitySubPage from '../CommonPages/COActivitySubPage';
import GoodHistorySubPage from './GoodHistorySubPage';
import { connect } from 'react-redux';
import { goodActions } from '../../actions/goodAction';
import { stringUtils } from '../../utils';

import goodHistory from '../../images/good-history.svg';
import goodCreationPic from '../../images/good-creation.svg';
import goodPackaging from '../../images/good-packaging.svg';
import goodTag from '../../images/good-tag.svg';
import distribution from '../../images/distribution.svg';
import consumption from '../../images/consumption.svg';
import goodFake from '../../images/good-fake.svg';
import goodFeeling from '../../images/good-feeling.svg';
import sesameActivity from '../../images/sesame-activity.svg';
import coActivity from '../../images/co-activity.svg';
import goodStatisticsLogo from '../../images/good-statistics-logo.png';

const goodGeneral = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigatePage: 'goodKey'
		};

		this.props.dispatch(
			goodActions.getGoodByCode(
				this.props.match.params.code,
				'goodMaster,goodEvents/user,goodEvents/consumer,container,taggants'
			)
		);
	}

	render() {
		const code = this.props.match.params.code;
		let good = this.props.good;
		let goodMaster;
		let goodMasterName;
		let goodMasterPic;
		let goodEvents = [];
		let goodCreation = [];
		let goodPacking = [];
		let goodDistribution = [];
		let goodConsumption = [];
		let lastOption;
		let container;
		let taggants;
		if (good) {
			// get goodMaster
			goodMaster = good.goodMaster;
			container = good.container;
			taggants = good.taggants;
			if (goodMaster) {
				goodMasterName = stringUtils.cutBySpecifyLength(goodMaster.name, 16);
			}
			if (
				goodMaster.uploadedPictures &&
				goodMaster.uploadedPictures.length > 0
			) {
				goodMasterPic = goodMaster.uploadedPictures[0].url;
			}
			// get good events
			goodEvents = good.goodEvents;
			goodEvents.every((item, i) => {
				if (item.operationType.toString() === 'CREATION') {
					goodCreation.push(item);
				} else if (item.operationType.toString() === 'PACKAGING') {
					goodPacking.push(item);
				} else if (item.operationType.toString() === 'DISTRIBUTION') {
					goodDistribution.push(item);
				} else if (item.operationType.toString() === 'CONSUMPTION') {
					goodConsumption.push(item);
				}
				return true;
			});
			if (goodEvents) {
				lastOption =
					goodEvents.length > 0
						? good.goodEvents[good.goodEvents.length - 1]
						: [];
			}
		}
		return (
			<div className="layout">
				<div className="navigation">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Header
							titleName="货物概况"
							linkName="返回货物统计"
							icon={goodStatisticsLogo}
						/>
					</Link>
					<ul className="navigation-list navigation-top">
						<Item
							id="goodKey"
							itemType="detailItemType"
							className="place-item"
							icon={goodMasterPic}
							selected={this.state.navigatePage === 'goodKey' ? true : false}
							locationName={goodMasterName}
							text={code}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-medium">
						<Item
							id="goodHistoryKey"
							itemType="tagItemType"
							name="历史记录"
							icon={goodHistory}
							selected={
								this.state.navigatePage === 'goodHistoryKey' ? true : false
							}
							tag={lastOption ? lastOption.operationType : ''}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="物流"
							id="goodDistributionKey"
							icon={distribution}
							selected={
								this.state.navigatePage === 'goodDistributionKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="产品生产"
							itemType="tagItemType"
							tag="FUW9392400"
							id="goodCreationKey"
							icon={goodCreationPic}
							selected={
								this.state.navigatePage === 'goodCreationKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-small">
						<Item
							name="假货"
							id="goodFakeKey"
							icon={goodFake}
							selected={
								this.state.navigatePage === 'goodFakeKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="窜货"
							id="goodFleeingKey"
							icon={goodFeeling}
							selected={
								this.state.navigatePage === 'goodFleeingKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
				</div>
				<div className="main">
					{this.state.navigatePage === 'goodKey' ? (
						<GoodDetailSubPage
							good={good}
							goodMasterPic={goodMasterPic}
							goodCreation={goodCreation}
							goodPacking={goodPacking}
							goodDistribution={goodDistribution}
							goodConsumption={goodConsumption}
						/>
					) : null}
					{this.state.navigatePage === 'goodCreationKey' ? (
						<GoodCreationSubPage
						 	parent="GoodGeneralProducts"
						 	goodCreation={goodCreation}
						 />
					) : null}
					{this.state.navigatePage === 'goodDistributionKey' ? (
						<GoodDistributionSubPage />
					) : null}
					{this.state.navigatePage === 'goodFakeKey' ? (
						<GoodGeneralFakeSubLHLHPage />
					) : null}
					{this.state.navigatePage === 'goodPackagingKey' ? (
						// <GoodGeneralPackagingSubPage
						// 	parent="GoodGeneralPacking"
						// 	goodPacking={goodPacking}
						// 	container={container}
						// />
						<div />
					) : null}
					{this.state.navigatePage === 'goodTagKey' ? (
						// <GoodTagSubPage parent="GoodGeneral" taggants={taggants} />
						<div />
					) : null}
					{this.state.navigatePage === 'goodFleeingKey' ? (
						<GoodFleeingSubPage />
					) : null}
					{this.state.navigatePage === 'goodConsumptionKey' ? (
						<GoodConsumptionSubPage goodEvents={goodEvents} />
					) : null}
					{this.state.navigatePage === 'sesameActivityKey' ? (
						<SesameActivitySubPage parent="GoodGeneral" />
					) : null}
					{this.state.navigatePage === 'coActivityKey' ? (
						<COActivitySubPage />
					) : null}
					{this.state.navigatePage === 'goodHistoryKey' ? (
						<GoodHistorySubPage goodEvents={goodEvents} />
					) : null}
				</div>
			</div>
		);
	}
};
function mapStateToProps(state) {
	const { good, msg } = state.goodReducer;
	return {
		good,
		msg
	};
}

const GoodGeneral = connect(mapStateToProps)(goodGeneral);
export default GoodGeneral;
