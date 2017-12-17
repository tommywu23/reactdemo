import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import './GoodStatistics.css';

import { goodMasterActions } from '../../actions/goodMasterAction';
import { programmeActions } from '../../actions/programmeAction';

import Item from '../Navigation/Item';
import Header from '../Navigation/Header';
import SesameActivitySubPage from '../CommonPages/SesameActivitySubPage';
import COActivitySubPage from '../CommonPages/COActivitySubPage';
import LastDataSubPage from './LastDataSubPage';
import GoodCreationSubPage from './GoodCreationSubPage';
import GoodDistributionSubPage from './GoodDistributionSubPage';
import GoodFakeSubPage from './GoodFakeSubPage';
import GoodFleeingSubPage from './GoodFleeingSubPage';
import GoodFleeingSubLHLHPage from './GoodFleeingSubLHLHPage';
import GoodFakeSubLHLHPage from './GoodFakeSubLHLHPage';
import GoodConsumptionSubPage from './GoodConsumptionSubPage';
import GoodStockSubPage from './GoodStockSubPage';
import GoodCreationDashboard from './GoodCreationDashboard';

import goodStatisticsLogo from '../../images/good-statistics-icon.png';
import goodHistoryPic from '../../images/good-history.svg';
import goodCreationPic from '../../images/good-creation.svg';
import goodPackagingPic from '../../images/good-packaging.svg';
import goodTagPic from '../../images/good-tag.svg';
import distributionPic from '../../images/distribution.svg';
import consumptionPic from '../../images/consumption.svg';
import goodFakePic from '../../images/good-fake.svg';
import goodFeelingPic from '../../images/good-feeling.svg';
import warningPic from '../../images/warning.svg';
import sesameActivityPic from '../../images/sesame-activity.svg';
import coActivityPic from '../../images/co-activity.svg';

let programmes = [];

const customerStatistics = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigatePage: 'lastDataKey',
			returnToMain: false
		};
		// this.props.dispatch(goodMasterActions.getWithTypes(['"PRODUCT"']));
		this.props.dispatch(programmeActions.getAll());
	}

	componentWillUnmount() {
		// 清除全局变量
		programmes = [];
	}

	render() {
		programmes = this.props.programmes || programmes;
		return (
			<div className="layout">
				<div className="navigation">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Header
							titleName={intl.get('good.statistics')}
							icon={goodStatisticsLogo}
						/>
					</Link>
					<ul className="navigation-list navigation-small">
						<Item
							name="最近数据"
							id="lastDataKey"
							icon={goodHistoryPic}
							selected={
								this.state.navigatePage === 'lastDataKey' ? true : false
							}
							count="62,470"
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-small">
						<Item
							name={
								intl.get('good.product') +
								' ' +
								intl.get('good.packaging') +
								' ' +
								intl.get('good.tag')
							}
							itemType="tagItemType"
							// tag="FUW9392400"
							id="goodCreationKey"
							icon={goodCreationPic}
							selected={
								this.state.navigatePage === 'goodCreationKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						{/* <Item
							name={intl.get('good.packaging') + intl.get('good.creation')}
							id="packagingCreationKey"
							icon={goodPackagingPic}
							selected={
								this.state.navigatePage === 'packagingCreationKey'
									? true
									: false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name={intl.get('good.tag') + intl.get('good.creation')}
							id="tagCreationKey"
							icon={goodTagPic}
							selected={
								this.state.navigatePage === 'tagCreationKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/> */}
						<Item
							name={intl.get('good.distribution')}
							id="goodDistributionKey"
							icon={distributionPic}
							selected={
								this.state.navigatePage === 'goodDistributionKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-small">
						{/* <Item
							name="交易"
							id="goodConsumptionKey"
							icon={consumptionPic}
							selected={
								this.state.navigatePage === 'goodConsumptionKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/> */}
						<Item
							name={intl.get('good.product') + intl.get('stock')}
							itemType="tagItemType"
							id="goodStockKey"
							icon={goodPackagingPic}
							selected={
								this.state.navigatePage === 'goodStockKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name={intl.get('good.fake')}
							id="goodFakeKey"
							itemType="tagItemType"
							icon={goodFakePic}
							selected={
								this.state.navigatePage === 'goodFakeKey' ? true : false
							}
							tag="有假货"
							warn={warningPic}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name={intl.get('good.fleeing')}
							id="goodFleeingKey"
							icon={goodFeelingPic}
							selected={
								this.state.navigatePage === 'goodFleeingKey' ? true : false
							}
							tag="有窜货"
							warn={warningPic}
							itemType="tagItemType"
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						{Object.keys(programmes).map(key => (
							<Item
								key={key}
								name={programmes[key].name}
								id={'sesameActivityKey' + key}
								selected={
									this.state.navigatePage === 'sesameActivityKey' + key
										? true
										: false
								}
								icon={sesameActivityPic}
								onClick={p => {
									this.setState({ navigatePage: p });
								}}
							/>
						))}
						{/* <Item
							name="芝麻活动"
							id="sesameActivityKey"
							icon={sesameActivityPic}
							selected={
								this.state.navigatePage === 'sesameActivityKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="CO活动"
							id="coActivityKey"
							icon={coActivityPic}
							selected={
								this.state.navigatePage === 'coActivityKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/> */}
					</ul>
				</div>
				<div className="main">
					{this.state.navigatePage === 'lastDataKey' ? (
						<LastDataSubPage goodMasters={this.props.goodMasters} />
					) : null}
					{this.state.navigatePage === 'goodCreationKey' ? (
						<GoodCreationDashboard parent="GoodProducts" />
					) : null}
					{this.state.navigatePage === 'goodDistributionKey' ? (
						<GoodDistributionSubPage />
					) : null}
					{this.state.navigatePage === 'goodFakeKey' ? (
						// <GoodFakeSubPage />
						<GoodFakeSubLHLHPage />
					) : null}
					{this.state.navigatePage === 'goodStockKey' ? (
						<GoodStockSubPage />
					) : null}
					{/* {this.state.navigatePage === 'packagingCreationKey' ? (
						<GoodCreationDashboard parent="PackagingProducts" />
					) : null}
					{this.state.navigatePage === 'tagCreationKey' ? (
						<GoodCreationDashboard parent="TagProducts" />
					) : null} */}
					{this.state.navigatePage === 'goodFleeingKey' ? (
						// <GoodFleeingSubPage />
						<GoodFleeingSubLHLHPage />
					) : null}
					{this.state.navigatePage === 'goodConsumptionKey' ? (
						<GoodConsumptionSubPage />
					) : null}
					{Object.keys(programmes).map(
						key =>
							this.state.navigatePage === 'sesameActivityKey' + key ? (
								<SesameActivitySubPage
									key={key}
									parent="GoodStatistics"
									programme={programmes[key]}
								/>
							) : null
					)}
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	const { goodMasters, msg } = state.goodMasterReducer;
	const { programmes } = state.programmeReducer;
	return {
		goodMasters,
		programmes,
		msg
	};
}

const CustomerStatistics = connect(mapStateToProps)(customerStatistics);
export default CustomerStatistics;
