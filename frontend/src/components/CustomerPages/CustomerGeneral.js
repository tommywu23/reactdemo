import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CustomerGeneral.css';

import Item from '../Navigation/Item';
import Header from '../Navigation/Header';
import CustomerDetailSubPage from './CustomerDetailSubPage';
import CustomerMemberSubPage from './CustomerMemberSubPage';
import CustomerGeneralConsumptionSubPage from './CustomerGeneralConsumptionSubPage';
import CompanySubPage from './CompanySubPage';
import CustomerMoreSubPage from './CustomerMoreSubPage';
import SesameActivitySubPage from '../CommonPages/SesameActivitySubPage';
import COActivitySubPage from '../CommonPages/COActivitySubPage';
import CustomerListSubPage from './CustomerListSubPage';
import HistorySubPage from './HistorySubPage';
import { connect } from 'react-redux';
import { customerActions } from '../../actions/customerAction';
import { history, stringUtils } from '../../utils';
// import images
import customerStatisticsLogo from '../../images/customer-general-icon.png';
import defaultCustomer from '../../images/default-customer.svg';
import customerMember from '../../images/customer-member.svg';
import company from '../../images/company.svg';
import more from '../../images/more.svg';
import consumption from '../../images/consumption.svg';
import historySvg from '../../images/history.svg';
import sesameActivity from '../../images/sesame-activity.svg';
import v1 from '../../images/v1.svg';
import v2 from '../../images/v2.svg';
import v3 from '../../images/v3.svg';
import warning from '../../images/warning.svg';
import HulkSvgGray from '../../images/grayHulk.svg';
import HulkSvgWhite from '../../images/whiteHulk.svg';
import goodFeelingSvg from '../../images/good-feeling.svg';
import customerListSvg from '../../images/customer-list.svg';

//LHLH demo
import LHLHActivitySubPage from './CustomerGeneralLHLH';
import CustomerGeneralHULKSubPage from './CustomerGeneralHULKSubPage';
import LHLHdemoJpg from '../../images/LHLHdemo.jpg';

let pageId; //integrant
let rewardSummary;
let customerDetail;
let activities;

const customerGeneral = class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigatePage: 'customerKey',
			pageId: this.props.match.params.id
		};
		// get customer detail
		this.props.dispatch(
			customerActions.getCustomerDetail(this.props.match.params.id)
		);
	}

	getActivities(programmeId) {
		if (programmeId) {
			this.props.dispatch(
				customerActions.getActivities(this.props.match.params.id, programmeId)
			);
		} else {
			this.props.dispatch(
				customerActions.getActivities(this.props.match.params.id)
			);
		}
	}

	getRewardSummary(programme) {
		let customerId = this.props.match.params.id;
		let validFrom = programme.validFrom;
		let validTo = programme.validTo;
		let endDate;
		let beginDate;
		if (validTo) {
			endDate = new Date(validTo).toLocaleDateString();
			beginDate = new Date(validFrom).toLocaleDateString();
		}
		endDate = endDate
			? endDate.replace('/', '-').replace('/', '-')
			: '2017-12-01';
		beginDate = beginDate
			? beginDate.replace('/', '-').replace('/', '-')
			: '2017-01-01';
		beginDate = this.props.dispatch(
			customerActions.getRewardSummary(
				customerId,
				programme.id,
				beginDate,
				endDate,
				'month'
			)
		);
	}

	navigateBack(event) {
		history.push('/CustomerStatistics');
	}

	componentWillUnmount() {
		// 销毁页面id
		pageId = null;
	}

	render() {
		// define params
		let programmeList = [];
		let memberCount = 0;
		let customerStaffs = [];
		let customer;
		let customerName;
		let customerId;
		let customerType;
		let customerParent;
		let customerParentName;
		// 进入一个页面
		if (!pageId) {
			customerDetail = null;
			rewardSummary = null;
			activities = null;
			pageId = this.state.pageId;
		} else {
			// 在当前页面操作，需要缓存
			customerDetail = customerDetail || this.props.customerDetail;
			rewardSummary = rewardSummary || this.props.rewardSummary;
			activities = activities || this.props.customerActivity;
			if (customerDetail) {
				console.log(customerDetail);
				console.log('customerDetail:', customerDetail);
				let programmesInfo;
				let programmes;
				customerStaffs = customerDetail.staffs;
				memberCount = customerDetail.staff_count;

				//start cxc tmp
				let tmpmembers = [
					{
						avatarImageUrl: '../../images/salesSunyiming.png',
						name: '孙志',
						role: 'BOSS'
					},
					{
						avatarImageUrl: '../../images/salesSunyiming.png',
						name: '孙志',
						role: 'BOSS'
					},
					{
						avatarImageUrl: '../../images/salesSunyiming.png',
						name: '孙志',
						role: 'BOSS'
					},
					{
						avatarImageUrl: '../../images/salesSunyiming.png',
						name: '孙志',
						role: 'BOSS'
					},
					{
						avatarImageUrl: '../../images/salesSunyiming.png',
						name: '孙志',
						role: 'BOSS'
					},
					{
						avatarImageUrl: '../../images/salesSunyiming.png',
						name: '孙志',
						role: 'BOSS'
					},
					{
						avatarImageUrl: '../../images/salesSunyiming.png',
						name: '孙志',
						role: 'BOSS'
					}
				];
				if (customerStaffs.length === 0) {
					customerStaffs = tmpmembers;
					memberCount = 7;
				}
				//end cxc tmp

				customer = customerDetail.customer;
				if (customerDetail.customer) {
					customerName = stringUtils.cutBySpecifyLength(
						customerDetail.customer.name,
						16
					);
					customerId = customerDetail.customer.id;
					customerType = customerDetail.customer.type;
					customerParent = customerDetail.customer.parent;
					customerParentName = customerDetail.customer.parent
						? customerDetail.customer.parent.name
						: '';
				}
				// put programme info to programmeList
				programmesInfo = customer ? customer.programmesInfo : [];
				programmes = customerDetail.programmes || [];
				programmes.forEach(item => {
					if (programmesInfo[item.id]) {
						item.points = programmesInfo[item.id].points;
						programmeList.push(item);
					}
				});
			}
		}
		return (
			<div className="layout">
				<div className="navigation">
					{/* <Link to="/CustomerStatistics" style={{ textDecoration: 'none' }}> */}
					<div
						onClick={event => {
							this.navigateBack(event);
						}}>
						<Header
							titleName="客户概况"
							linkName="返回客户统计"
							icon={customerStatisticsLogo}
						/>
					</div>
					{/* </Link> */}
					<ul className="navigation-list navigation-top">
						<Item
							id="customerKey"
							itemType="detailItemType"
							className="place-item"
							icon={defaultCustomer}
							selected={this.state.navigatePage === 'customerKey' ? true : false}
							locationName={customerName}
							text={customerId + '   ' + customerType}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-medium">
						<Item
							id="customerMembersKey"
							itemType="imgStackItemType"
							icon={customerMember}
							selected={
								this.state.navigatePage === 'customerMembersKey' ? true : false
							}
							name="门店成员"
							list={customerStaffs}
							count={memberCount}
							unit="人"
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							id="companyKey"
							itemType="tagItemType"
							name="母公司"
							icon={company}
							selected={this.state.navigatePage === 'companyKey' ? true : false}
							tag={customerParentName ? customerParentName : '暂无'}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							id="moreKey"
							itemType="imgListItemType"
							name="更多"
							icon={more}
							selected={this.state.navigatePage === 'moreKey' ? true : false}
							list={list.vendorList}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-small">
						{/* <Item
							id="consumptionKey"
							itemType="tagItemType"
							name="交易"
							icon={consumption}
							selected={
								this.state.navigatePage === 'consumptionKey' ? true : false
							}
							tag="出货 订货 回收瓶盖"
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/> */}
						<Item
							id="historyKey"
							name="历史"
							icon={historySvg}
							selected={this.state.navigatePage === 'historyKey' ? true : false}
							itemType="imgListItemType"
							list={list.historyList}
							onClick={p => {
								this.setState({ navigatePage: p });
								this.getActivities();
							}}
						/>
						<Item
							name="窜货"
							count="7480"
							unit="积分"
							id="CuanhuoKeyLHLH"
							selected={this.state.navigatePage === 'CuanhuoKeyLHLH' ? true : false}
							icon={goodFeelingSvg}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="客户列表"
							count="7480"
							unit="积分"
							id="customerListPage"
							selected={this.state.navigatePage === 'customerListPage' ? true : false}
							icon={customerListSvg}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
					<ul className="navigation-list navigation-small">
						{/* {Object.keys(programmeList).map(key => (
							<Item
								key={key}
								name={programmeList[key].name}
								count={
									programmeList[key].points ? programmeList[key].points : '暂无'
								}
								unit="积分"
								id={'sesameActivityKey' + key}
								selected={
									this.state.navigatePage === 'sesameActivityKey' + key
										? true
										: false
								}
								icon={sesameActivity}
								onClick={p => {
									this.setState({ navigatePage: p });
									this.getRewardSummary(programmeList[key]);
									this.getActivities(programmeList[key].id);
								}}
							/>
						))} */}
						<Item
							name="Hulk"
							count="7480"
							unit="积分"
							id="sesameActivityKeyLHLH"
							selected={
								this.state.navigatePage === 'sesameActivityKeyLHLH' ? true : false
							}
							icon={HulkSvgGray}
							grayIcon={HulkSvgWhite}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
				</div>
				<div className="main">
					{this.state.navigatePage === 'customerKey' ? (
						<CustomerDetailSubPage
							customer={customer}
							staffs={customerStaffs}
							msg={this.props.msg}
						/>
					) : null}
					{this.state.navigatePage === 'customerMembersKey' ? (
						<CustomerMemberSubPage staffs={customerStaffs} />
					) : null}
					{this.state.navigatePage === 'customerListPage' ? (
						<CustomerListSubPage staffs={customerStaffs} />
					) : null}
					{this.state.navigatePage === 'companyKey' ? (
						<CompanySubPage parentCustomer={customerParent} />
					) : null}
					{this.state.navigatePage === 'moreKey' ? (
						<CustomerMoreSubPage customer={customer} />
					) : null}
					{this.state.navigatePage === 'consumptionKey' ? (
						<CustomerGeneralConsumptionSubPage />
					) : null}
					{this.state.navigatePage === 'historyKey' ? (
						<HistorySubPage activities={activities} />
					) : null}
					{Object.keys(programmeList).map(
						key =>
							this.state.navigatePage === 'sesameActivityKey' + key ? (
								<SesameActivitySubPage
									key={key}
									parent="CustomerGeneral"
									programme={programmeList[key]}
									points={programmeList[key].points}
									activities={activities}
									rewardSummary={rewardSummary}
								/>
							) : null
					)}
					{this.state.navigatePage === 'coActivityKey' ? (
						<COActivitySubPage />
					) : null}
					{this.state.navigatePage === 'CuanhuoKeyLHLH' ? (
						<LHLHActivitySubPage />
					) : null}
					{this.state.navigatePage === 'sesameActivityKeyLHLH' ? (
						<CustomerGeneralHULKSubPage />
					) : null}
				</div>
			</div>
		);
	}
};

const list = {
	vendorList: [
		{
			avartar: v1,
			name: 'tencentmap'
		},
		{
			avartar: v2,
			name: 'chengxin'
		},
		{
			avartar: v3,
			name: 'dianping'
		}
	],
	historyList: [
		{
			avartar: warning,
			name: 'history'
		}
	]
};

function mapStateToProps(state) {
	const {
		customerDetail,
		customerActivity,
		rewardSummary,
		msg
	} = state.customerReducer;
	return {
		customerDetail,
		customerActivity,
		rewardSummary,
		msg
	};
}

const CustomerGeneral = connect(mapStateToProps)(customerGeneral);
export default CustomerGeneral;
