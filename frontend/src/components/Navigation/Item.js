import React, { Component } from 'react';

import './Item.css';

const Item = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		if (this.props.itemType === 'imgStackItemType') {
			console.log("=================")
			console.log("=================")
			console.log(this.props)
			console.log("=================")
		}

	}

	handleClick() {
		if (this.props.id === undefined) return;
		this.props.onClick(this.props.id);
	}

	render() {
		var el = {};
		var ed = {};
		if (this.props.itemType === 'detailItemType') {
			ed = (
				<i
					className="icon icon-arrow-m icon-right icon-right-m"
					style={{
						filter: this.props.selected ? 'drop-shadow(#FFFFFF -60px 0)' : '',
						WebkitFilter: this.props.selected
							? 'drop-shadow(#FFFFFF -60px 0)'
							: '',
						marginRight: this.props.selected ? '-60px' : ''
					}}
				/>
			);
		} else {
			ed = (
				<i
					className="icon icon-arrow icon-right icon-right-m"
					style={{
						filter: this.props.selected ? 'drop-shadow(#FFFFFF -60px 0)' : '',
						marginRight: this.props.selected ? '-60px' : ''
					}}
				/>
			);
		}
		if (this.props.itemType === 'detailItemType') {
			el = (
				<dl>
					<dt
						className="font-detail-title1"
						style={{ color: this.props.selected ? 'white' : '' }}
					>
						{this.props.locationName}
					</dt>
					<dd
						className="font-navigation-title2"
						style={{ color: this.props.selected ? 'white' : '' }}
					>
						{this.props.text}
					</dd>
				</dl>
			);
		} else if (this.props.itemType === 'imgStackItemType') {
			el = (
				<div
					className="right-navigation-box"
					style={{ color: this.props.selected ? 'white' : '' }}
				>
					<div className="stack-imgs imgStackItemType-inline-block">
						{Object.keys(this.props.list).map(
							key =>
								key < 6 ? (
									<img
										key={key.toString()}
										className="stack"
										src={this.props.list[key].avatarImageUrl}
										alt={this.props.list[key].name}
									/>
								) : (
									''
								)
						)}
					</div>
					<div
						className="font-navigation-explain imgStackItemType-inline-block"
						style={{ color: this.props.selected ? 'white' : '' }}
					>
						{this.props.count === 0 ? '暂无' : this.props.count + this.props.unit}
					</div>
				</div>
			);
		} else if (this.props.itemType === 'imgListItemType') {
			el = (
				<div
					className="right-navigation-box font-navigation-explain"
					style={{ color: this.props.selected ? 'white' : '' }}
				>
					{Object.keys(this.props.list).map(key => (
						<img
							key={key.toString()}
							src={this.props.list[key].avartar}
							alt={this.props.list[key].name}
						/>
					))}
				</div>
			);
		} else if (this.props.itemType === 'tagItemType') {
			el = (
				<div
					className="right-navigation-box font-navigation-explain"
					style={{ color: this.props.selected ? 'white' : '' }}
				>
					{this.props.warn !== undefined ? (
						<img src={this.props.warn} alt={this.props.warn} />
					) : null}
					{this.props.tag}
				</div>
			);
		} else if (this.props.itemType === 'searchItemType') {
			el = (
				<div
					className="right-navigation-box font-navigation-explain"
					style={{ color: this.props.selected ? 'white' : '' }}
				>
					<i className="icon icon-search" />
					{this.props.count}
					{this.props.unit}
				</div>
			);
		} else {
			el = (
				<div
					className="right-navigation-box font-navigation-explain"
					style={{ color: this.props.selected ? 'white' : '' }}
				>
					{this.props.count}
					{this.props.unit}
				</div>
			);
		}

		return (
			<li
				id={this.props.id}
				onClick={this.handleClick}
				className={this.props.className}
				style={{
					backgroundColor: this.props.selected ? '#56a4fc' : '',
					color: this.props.selected ? 'white' : ''
				}}
			>
				<img
					className="icon-front"
					src={this.props.icon}
					alt={this.props.icon}
					style={{
						filter:
							this.props.selected && this.props.itemType !== 'detailItemType'
								? 'drop-shadow(#FFFFFF 60px 0)'
								: '',
						WebkitFilter:
							this.props.selected && this.props.itemType !== 'detailItemType'
								? 'drop-shadow(#FFFFFF 60px 0)'
								: '',
						marginLeft:
							this.props.selected && this.props.itemType !== 'detailItemType'
								? '-40px'
								: '',
						marginRight:
							this.props.selected && this.props.itemType !== 'detailItemType'
								? '80px'
								: ''
					}}
				/>
				<span
					className="font-navigation-title2"
					style={{ color: this.props.selected ? 'white' : '' }}
				>
					{this.props.name}
				</span>
				{el}
				{ed}
			</li>
		);
	}
};

export default Item;
