import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import './CustomerInfoCard.css';
import editSvg from '../../images/edit.svg';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';
import forwardSvg from '../../images/forward.svg';
import salesSunyiming from '../../images/salesSunyiming.png';

//stateless Component
const DisplayCustomCategory = ({ title, objects }) => (
	<div className="card ">
		<div className="customer-category">
			<div className="category-left">
				<div className="title font-content-title">{title}</div>
				<ul className="customerCategory font-content">
					{Object.keys(objects).map(key => (
						<li key={key.toString()}>
							<div className="triangle-left" />
							<span>{objects[key]}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="category-right">
				<div className="title font-content-title">销售分类</div>
				<ul className="customerCategory font-content">
					<li>
						<div className="triangle-left" />
						<span>上海</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

const DisplayCustomCategorySingle = ({ title, objects }) => (
	<div className="card ">
		<div className="customer-category">
			<div className="title font-content-title">{title}</div>
			<ul className="customerCategory font-content">
				{Object.keys(objects).map(key => (
					<li key={key.toString()}>
						<div className="triangle-left" />
						<span>{objects[key]}</span>
					</li>
				))}
			</ul>
		</div>
	</div>
);

const SaleMembers = () => (
	<div className="card ">
		<div className="customer-category">
			<div className="title font-content-title">销售团队</div>
			<div className="sales-member-list">
				<img src={salesSunyiming} />
				<span className="text">孙一鸣</span>
			</div>
		</div>
	</div>
);

const DispalyBarSpecificInfo = ({ title, objects, msg }) => (
	<div className="card font-content-title">
		<div className="title">{title}</div>
		<ul className="list-col">
			<li>{msg}</li>
			{Object.keys(objects).map(
				(filed, key) => (key < 10 ? <li key={key}>{filed}</li> : null)
			)}
		</ul>
	</div>
);

const DispalyBarBasicInfo = ({ title, objects }) => (
	<div className="card font-content-title">
		<div className="title">{title}</div>
		<ul className="list-col">
			<li>Outlet Capacity : {objects.outletCapacity}</li>
			<li>Size : {objects.size}</li>
		</ul>
	</div>
);

const TimeLine = ({ title, objects }) => (
	<div className="card font-content-title">
		<div className="title">{title}</div>
		<div>
			<span className="event-header event-header-left">时间</span>
			<span className="event-header event-header-right">事件</span>
		</div>
		<ul className="time-line">
			{Object.keys(objects)
				.filter(key => objects[key])
				.map(key => (
					<li key={key.toString()}>
						<dl className="time">
							<dt>{objects[key].scanDate}</dt>
							<dd>{objects[key].scanTime}</dd>
						</dl>
						<dl className="description">
							<dt>{objects[key].scanUser}</dt>
							<dd>{objects[key].message ? objects[key].message : ''}</dd>
						</dl>
					</li>
				))}
		</ul>
	</div>
);

const DisplayCardArray = ({ title, objects }) => (
	<div className="card font-content-title">
		<div className="title">{title}</div>
		<button className="edit edit-inner">
			<img src={editSvg} />
		</button>
		<ul className="list-col">
			{Object.keys(objects).map(key => (
				<li key={key.toString()}>{objects[key]}</li>
			))}
		</ul>
	</div>
);

const DisplayCustomerLevel = ({ objects }) => (
	<div className="card font-content-title">
		<ul className="list-col">
			<li>等级:{objects.level}</li>
			<li>店铺总积分:{objects.points}</li>
			<li>店铺活动收益:{objects.earn}</li>
		</ul>
	</div>
);

const History = ({ title, objects, header }) => (
	<div className="card card-noPadding">
		<div className="title">{title}</div>
		<table className="record">
			<thead>
				<tr>
					<th className="time">{header[0]}</th>
					<th className="score">{header[1]}</th>
					<th className="detail">{header[2]}</th>
				</tr>
			</thead>
			<tbody>
				{Object.keys(objects).map(key => (
					<tr key={key.toString()}>
						<td>{objects[key].date}</td>
						<td>{objects[key].operation}</td>
						<td>{objects[key].detail}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

//state Component
const CustomerFundamentalInfo = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			editCustomerInfo: false
		};
	}

	handleClick(event) {
		this.setState({
			editCustomerInfo: !this.state.editCustomerInfo
		});
	}

	fundamentalInfo(customer) {
		return (
			<div className="card">
				<img className="avartar" src={customer.avartar} alt="avartar" />
				<div className="customer-text">
					<span>ID: {customer.id}</span>
					<span>电话: {customer.phoneNumber}</span>
					<span>地址： {customer.address}</span>
				</div>

				{/* <ul className="list-col">
					<li>ID: {customer.id}</li>
					<li>电话: {customer.phoneNumber}</li>
					<li>地址： {customer.address}</li>
				</ul> */}
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

	render() {
		return <div>{this.fundamentalInfo(this.props.customer)}</div>;
	}
};

const Members = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			editCustomerInfo: false
		};
	}

	handleClick(event) {
		this.setState({
			editCustomerInfo: !this.state.editCustomerInfo
		});
	}

	members(title, objects, edit, type, withHeader) {
		let membersList;
		switch (type) {
			case 'goodOwners':
				membersList = Object.keys(objects).map(key => (
					<li key={key.toString()}>
						<img src={objects[key].avatarImageUrl} alt="avartar" />
						<span className="name font-content">{objects[key].name}</span>
						<span className="name">{objects[key].year}</span>
						<span className="name">{objects[key].time}</span>
					</li>
				));
				break;
			default:
				membersList = Object.keys(objects).map(key => (
					<li key={key.toString()}>
						<Link to="/consumerGeneral">
							<img src={objects[key].avatarImageUrl} alt="avartar" />
							<span className="name font-content">{objects[key].name}</span>
							{objects[key].role ? (
								<span className="name">
									{objects[key].role === 'STAFF'
										? '职员'
										: objects[key].role === 'BOSS' ? '店长' : '未知'}
								</span>
							) : null}
							{objects[key].sale ? (
								<span className="name font-content">{objects[key].sale}</span>
							) : null}
						</Link>
					</li>
				));
		}
		return (
			<div className="card font-content-title">
				<div className="title">
					{title}
					{edit ? (
						<button
							className="edit edit-inner"
							type="button"
							onClick={event => this.handleClick(event)}
						>
							<img src={editSvg} alt="edit" />
						</button>
					) : null}
					{withHeader
						? Object.keys(withHeader).map(
								index =>
									index == 0 ? (
										<span className="consumer-list-header-first">
											{withHeader[index]}
										</span>
									) : (
										<span className="consumer-list-header">
											{withHeader[index]}
										</span>
									)
							)
						: null}
				</div>
				<ul className="member-list">{membersList}</ul>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.members(
					this.props.title,
					this.props.objects,
					this.props.edit,
					this.props.type,
					this.props.withHeader
				)}
			</div>
		);
	}
};

const ParentCompany = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			editParentCompany: false
		};
	}

	handleClick(event) {
		this.setState({
			editParentCompany: !this.state.editParentCompany
		});
	}

	fundamentalInfo(title, customer, withEdit, withHeader) {
		return (
			<div className="card font-content-title">
				<div className="title">
					{title}
					{withEdit ? (
						<button
							className="edit edit-inner"
							type="button"
							onClick={event => this.handleClick(event)}
						>
							<img src={editSvg} alt="edit" />
						</button>
					) : null}
				</div>
				<ul className="list-col font-content">
					<li>{customer.name}</li>
				</ul>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.fundamentalInfo(
					this.props.title,
					this.props.customer,
					this.props.withEdit,
					this.props.withHeader
				)}
			</div>
		);
	}
};

const DisplayCustomerWithForward = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log('share customer:', event);
	}

	tecentMap(customer) {
		console.log(customer);
		return (
			<ul className="list-col">
				<li>{customer.name}</li>
				<li>
					POI :{' '}
					{customer.poi
						? customer.poi.position.coordinates[0] +
							',' +
							customer.poi.position.coordinates[1]
						: ''}
				</li>
				<li>ID : {customer.id}</li>
				<li>Address : {customer.address}</li>
			</ul>
		);
	}

	integrity(customer) {
		return (
			<ul className="list-col">
				<li>RegNumber : {customer.regNumber}</li>
				<li>OrgNumber : {customer.orgNumber}</li>
				<li>CreditCode : {customer.creditCode}</li>
			</ul>
		);
	}

	daZhongDianPing(customer) {
		return (
			<ul className="list-col">
				<li>等级 &#9733;&#9733;&#9733;&#9733;&#9733;</li>
				<li>{customer.comment}</li>
				<li>
					口味 <img className="score" src="images/score.png" alt="" />9.2
				</li>
				<li>
					环境 <img className="score" src="images/score.png" alt="" />9.2
				</li>
				<li>
					服务 <img className="score" src="images/score.png" alt="" />9.2
				</li>
			</ul>
		);
	}

	judgeCardType(customer, type) {
		//default tecent Map
		let body = this.tecentMap(customer);
		switch (type) {
			case 'integrity':
				body = this.integrity(customer);
				break;
			case 'daZhongDianPing':
				body = this.daZhongDianPing(customer);
				break;
			default:
				break;
		}
		return body;
	}

	displayCustomerWithForward(title, customer, picture, type) {
		return (
			<div className="customerForward">
				<div className="tecent_left font-content-title">
					<div className="title">
						<span>{title}</span>
						<button
							className="no-border-button"
							type="button"
							onClick={event => this.handleClick(event)}
						>
							<img src={forwardSvg} alt="forward" />
						</button>
					</div>
					{this.judgeCardType(customer, type)}
				</div>
				{!picture ? (
					<div className="tecent_right">
						<Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
							<Marker position={{ lng: 116.402544, lat: 39.928216 }} />
							<NavigationControl />
							{/* <InfoWindow
								position={{ lng: 116.402544, lat: 39.928216 }}
								text="内容"
								title="标题"
							/> */}
						</Map>
					</div>
				) : picture !== 'none' ? (
					<div className="card-img">
						<img width="170" height="170" src={picture} />
					</div>
				) : null}
			</div>
		);
	}

	render() {
		return (
			<div className="card">
				{this.displayCustomerWithForward(
					this.props.title,
					this.props.customer,
					this.props.picture,
					this.props.type
				)}
			</div>
		);
	}
};

const CustomerLink = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log('share comment:', event);
	}

	customerLink(title, objects) {
		return (
			<div className="card font-content-title">
				<div className="title">{title}</div>
				<ul className="member-list">
					{Object.keys(objects).map(key => (
						<li key={key.toString()} style={{ height: '65px' }}>
							<img
								style={{ width: '130px', height: '42px', marginLeft: '30px' }}
								src={objects[key].avartar}
								alt="avartar"
							/>
							<i className="icon icon-add-more" />
						</li>
					))}
				</ul>
			</div>
		);
	}

	render() {
		return <div>{this.customerLink(this.props.title, this.props.objects)}</div>;
	}
};

export default CustomerFundamentalInfo;

export {
	DisplayCustomCategory,
	DisplayCustomCategorySingle,
	DispalyBarSpecificInfo,
	DispalyBarBasicInfo,
	Members,
	TimeLine,
	SaleMembers,
	DisplayCardArray,
	History,
	ParentCompany,
	DisplayCustomerWithForward,
	CustomerLink,
	DisplayCustomerLevel
};
