import React, { Component } from 'react';
import { Members } from '../Cards/CustomerInfoCard';

import './CustomerMemberSubPage.css';

const CustomerMemberSubPage = class extends Component {
	render() {
		// let members = this.props.staffs || [];
		return (
			<div className="page" style={this.props.style}>
				<Members title="门店成员" objects={members} edit={true} />
			</div>
		);
	}
};

let members = [
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

export default CustomerMemberSubPage;
