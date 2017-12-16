import React, { Component } from 'react';
import CustomerFundamentalInfo, {
	DisplayCustomCategory,
	SaleMembers,
	DisplayCardArray,
	// DispalyBarBasicInfo,
	DispalyBarSpecificInfo
} from '../Cards/CustomerInfoCard';

import './CustomerDetailSubPage.css';
import defaultCustomer from '../../images/default-customer.svg';

const CustomerDetailSubPage = class extends Component {
	render() {
		//Mock
		let customer = this.props.customer;
		let members = this.props.staffs;
		let id;
		let address;
		let phoneNumber;
		let customFields = {};
		let customerGroups;
		let customerGroupsName = [];
		if (customer) {
			id = customer.id;
			address = customer.address;
			phoneNumber = customer.telephoneNumber;
			customFields = customer.customFields;
			customerGroups = customer.customerGroups;
			if (customerGroups != undefined) {
				customerGroups.forEach(item => {
					customerGroupsName.push(item.name);
				});
			}
		}
		let customerInfo = {
			avartar: defaultCustomer,
			id: id,
			address: address,
			phoneNumber: phoneNumber,
			members: members,
			activities: ['本周有历史记录', '2017.05.29注册'],
			specificInfo: customFields,
			basicInfo: {
				outletCapacity: '<200',
				size: '367sqm'
			},
			generalInfo: [
				'能量类型：高能量',
				'容载量：<200人',
				'补贴金额：500',
				'店铺面积：367平方米',
				'满座率：93%',
				'销售等级：Premium',
				'IS%：54'
			],
			morelInfo: [
				'Chi帐号：TaoKer Bar',
				'Eng帐号：TaoKer Bar',
				'渠道：酒吧',
				'CR12 Btl/per month'
			]
		};
		return (
			<div className="page" style={this.props.style}>
				<CustomerFundamentalInfo customer={customerInfo} />
				<DisplayCustomCategory title="客户分类" objects={customerGroupsName} />
				<SaleMembers title="销售团队" objects={customerInfo.members} />
				<DisplayCardArray title="最近操作" objects={customerInfo.activities} />
				<DisplayCardArray title="基本信息" objects={customerInfo.generalInfo} />
				<DisplayCardArray title="更多信息" objects={customerInfo.morelInfo} />
				{/* <DispalyBarSpecificInfo
					title="客户自定义字段"
					objects={customerInfo.specificInfo}
					msg={this.props.msg}
				/> */}
			</div>
		);
	}
};

export default CustomerDetailSubPage;
