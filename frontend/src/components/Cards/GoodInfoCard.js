import React, { Component } from 'react';
import './GoodInfoCard.css';
import './Card.css';
import Item from '../Navigation/Item';
import edit from '../../images/edit.svg';
import editSvg from '../../images/edit.svg';

export default class GoodInfoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigatePage: 'goodKey'
		};
	}

	render() {
		const good = this.props.good;
		//const goodCreation = this.props.goodCreation;
		const goodPacking = this.props.goodPacking[0];
		//const goodDistribution = this.props.goodDistribution;
		const goodConsumption = this.props.goodConsumption[0];
		const goodInfo = {
			picture: {
				url: this.props.goodMasterPic,
				name: good ? (good.goodMaster ? good.goodMaster.name : '') : ''
			},
			otherAttributes: [
				{
					field: '灌装日期',
					value: goodPacking
						? new Date(goodPacking.createdAt).toLocaleString()
						: ''
				},
				{
					field: '扫描时间',
					value: goodConsumption
						? new Date(goodConsumption.createdAt).toLocaleString()
						: ''
				},
				{
					field: '扫描地址',
					value: goodConsumption ? goodConsumption.subdivision : ''
				}
			],
			codes: [
				{
					codeName: 'QR-code',
					code: good
						? good.codes.length > 0 ? good.codes[0].codeNameId : ''
						: ''
				},
				{
					codeName: 'datamatrix',
					code: 'SFFHUH138'
				},
				{
					codeName: 'Packed in',
					code: 'Case#2637'
				}
			],
			//authority: good ? good.organizationIds : ''
			authority: ['MMPJ','PR Holding','PR China']
		};
		return (
			<div>
				<Picture picture={goodInfo.picture} />
				<Code codes={goodInfo.codes} />
				<div className="card item-list">
					<ul className="ul-list">
						<Item
							name="包装生产"
							itemType="tagItemType"
							tag="Packed"
							id="packagingCreationKey"
							selected={
								this.state.navigatePage === 'packagingCreationKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
						<Item
							name="标签生产"
							itemType="tagItemType"
							tag="One Tag"
							id="tagCreationKey"
							selected={
								this.state.navigatePage === 'tagCreationKey' ? true : false
							}
							onClick={p => {
								this.setState({ navigatePage: p });
							}}
						/>
					</ul>
				</div>
				<OtherAttributes otherAttributes={goodInfo.otherAttributes} />
				<Authority authority={goodInfo.authority} />
			</div>
		);
	}
}

class Picture extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('edit this info!');
	}
	render() {
		return (
			<div className="card">
				<img  className="good-picture" src={this.props.picture.url} alt="good" />
				<div className="good-text font-navigation-title1">
					<span>{this.props.picture.name}</span>
				</div>
				<button
					className="edit edit-button"
					type="button"
					onClick={event => this.handleClick(event)}
				>
					<img src={editSvg} alt="edit" />
					<span>编辑</span>
				</button>
			</div>
		);
	}
}

class Code extends Component {
	render() {
		const codes = this.props.codes;
		const itemList = codes
			? codes.map((value, index) => (
					<li key={index.toString()}>
						{value.codeName}: {value.code}
					</li>
				))
			: '';
		return (
			<div className="card">
				<ul className="list-col font-content-title">{itemList}</ul>
			</div>
		);
	}
}

class OtherAttributes extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('edit this info!');
	}

	render() {
		const otherAttributes = this.props.otherAttributes;
		const itemList = otherAttributes
			? otherAttributes.map((value, index) => (
					<li key={index.toString()}>
						{value.field}: {value.value}
					</li>
				))
			: '';
		return (
			<div className="card">
				{/* <button className="edit-good" type="button" onClick={this.handleClick}>
					<img src={edit} alt="edit" />
				</button> */}
				<div className="font-content-title">其他属性</div>
				<ul className="list-col font-content-title">{itemList}</ul>
			</div>
		);
	}
}

class Authority extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('edit this info!');
	}

	render() {
		const authority = this.props.authority;
		const itemList = authority
			? authority.map((value, index) => <li key={index.toString()}>{value}</li>)
			: '';
		return (
			<div className="card">
				{/* <button className="edit-good" type="button" onClick={this.handleClick}>
					<img src={edit} alt="edit" />
				</button> */}
				<div className="font-content-title">查看权限</div>
				<ul className="list-col font-content-title">{itemList}</ul>
			</div>
		);
	}
}
