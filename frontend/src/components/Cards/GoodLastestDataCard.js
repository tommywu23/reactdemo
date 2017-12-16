import React, { Component } from 'react';

import ChinaMap from '../Charts/Map/ChinaMap';
import './Card.css';
import './GoodLastestDataCard.css';

const DATA = [
	{
		name: '陕西',
		value: '65'
	},
	{
		name: '福建',
		value: '110'
	},
	{
		name: '宁夏',
		value: '65'
	},
	{
		name: '重庆',
		value: '160'
	},
	{
		name: '湖北',
		value: '165'
	},
	{
		name: '安徽',
		value: '135'
	},
	{
		name: '江西',
		value: '125'
	},
	{
		name: '广西',
		value: '156'
	},
	{
		name: '云南',
		value: '125'
	},
	{
		name: '黑龙江',
		value: '105'
	},
	{
		name: '吉林',
		value: '105'
	},
	{
		name: '辽宁',
		value: '105'
	},
	{
		name: '内蒙古',
		value: '105'
	},
	{
		name: '山西',
		value: '105'
	},
	{
		name: '河南',
		value: '105'
	},
	{
		name: '山东',
		value: '250'
	},
	{
		name: '湖南',
		value: '105'
	},
	{
		name: '新疆',
		value: '60'
	},
	{
		name: '甘肃',
		value: '30'
	},
	{
		name: '上海',
		value: '250'
	},
	{
		name: '浙江',
		value: '250'
	},
	{
		name: '江苏',
		value: '250'
	},
	{
		name: '北京',
		value: '250'
	},
	{
		name: '山西',
		value: '60'
	},
	{
		name: '河北',
		value: '60'
	},
	{
		name: '天津',
		value: '70'
	},
	{
		name: '辽宁',
		value: '250'
	},
	{
		name: '贵州',
		value: '250'
	},
	{
		name: '广东',
		value: '250'
	},
	{
		name: '青海',
		value: '1'
	},
	{
		name: '西藏',
		value: '65'
	},
	{
		name: '四川',
		value: '250'
	},
	{
		name: '宁夏',
		value: '250'
	},
	{
		name: '海南',
		value: '250'
	},
	{
		name: '台湾',
		value: '150'
	},
	{
		name: '香港',
		value: '250'
	},
	{
		name: '澳门',
		value: '250'
	}
];

const SELECTOPTION = [
	{
		name: '陕西',
		value: '65'
	},
	{
		name: '福建',
		value: '110'
	},
	{
		name: '宁夏',
		value: '65'
	},
	{
		name: '重庆',
		value: '160'
	},
	{
		name: '湖北',
		value: '165'
	},
	{
		name: '安徽',
		value: '135'
	},
	{
		name: '江西',
		value: '125'
	},
	{
		name: '广西',
		value: '156'
	},
	{
		name: '云南',
		value: '125'
	},
	{
		name: '黑龙江',
		value: '105'
	},
	{
		name: '吉林',
		value: '105'
	},
	{
		name: '辽宁',
		value: '105'
	},
	{
		name: '内蒙古',
		value: '105'
	},
	{
		name: '山西',
		value: '105'
	},
	{
		name: '河南',
		value: '105'
	},
	{
		name: '山东',
		value: '250'
	},
	{
		name: '湖南',
		value: '105'
	},
	{
		name: '新疆',
		value: '60'
	},
	{
		name: '甘肃',
		value: '30'
	},
	{
		name: '上海',
		value: '250'
	},
	{
		name: '浙江',
		value: '250'
	},
	{
		name: '江苏',
		value: '250'
	},
	{
		name: '北京',
		value: '250'
	},
	{
		name: '山西',
		value: '60'
	},
	{
		name: '河北',
		value: '60'
	},
	{
		name: '天津',
		value: '70'
	},
	{
		name: '辽宁',
		value: '250'
	},
	{
		name: '贵州',
		value: '250'
	},
	{
		name: '广东',
		value: '250'
	},
	{
		name: '青海',
		value: '1'
	},
	{
		name: '西藏',
		value: '65'
	},
	{
		name: '四川',
		value: '250'
	},
	{
		name: '宁夏',
		value: '250'
	},
	{
		name: '海南',
		value: '250'
	},
	{
		name: '台湾',
		value: '150'
	},
	{
		name: '香港',
		value: '250'
	},
	{
		name: '澳门',
		value: '250'
	}
];

const BUTTOMSTYLE = {
	color: '#fff',
	backgroundColor: '#0076ff'
};

const GoodLastestDataCard = class extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			option: 'allproducts',
			data: DATA,
			productOption: 'allProduct',
			timeOption: 'allTime'
		};
	}

	handleClick(event, option) {
		let newData = this.state.data;
		let productOption = this.state.productOption;
		let timeOption = this.state.timeOption;
		switch (option) {
			case 'allProduct':
				newData = DATA;
				productOption = option;
				break;
			case 'zhiHuaShi':
				newData = DATA;
				productOption = option;
				newData = SELECTOPTION;
				break;
			case 'baiLingTan':
				newData = DATA;
				productOption = option;
				newData = SELECTOPTION;
				break;
			case 'maDieLi':
				newData = DATA;
				productOption = option;
				newData = SELECTOPTION;
				break;
			case 'allTime':
				newData = DATA;
				timeOption = option;
				break;
			case 'oneYear':
				newData = DATA;
				timeOption = option;
				newData = SELECTOPTION;
				break;
			case 'oneMonth':
				newData = DATA;
				timeOption = option;
				newData = SELECTOPTION;
				break;
			case 'oneWeek':
				newData = DATA;
				timeOption = option;
				newData = SELECTOPTION;
				break;
			case 'oneDay':
				newData = DATA;
				timeOption = option;
				newData = SELECTOPTION;
				break;
			default:
		}
		this.setState({
			option: 'option',
			data: newData,
			productOption: productOption,
			timeOption: timeOption
		});
	}

	mapOption(data) {
		let option = {
			title: {},
			tooltip: {
				trigger: 'item',
				showDelay: '20',
				backgroundColor: '#4A4A4A;',
				padding: [0, 5, 0, 5]
			},
			visualMap: {
				type: 'piecewise',
				pieces: [
					{ gt: 250 },
					{ gt: 200, lte: 250 },
					{ gt: 150, lte: 200 },
					{ gt: 100, lte: 150 },
					{ gt: 50, lte: 100 },
					{ gt: 0, lte: 50 }
				],
				inRange: {
					color: [
						'#CCE4FF',
						'#99C8FF',
						'#66ADFF',
						'#3391FF',
						'#0076FF',
						'#0076FF'
					]
				},
				outOfRange: {
					color: ['#fff']
				}
			},
			toolbox: {
				show: true,
				orient: 'horizontal',
				right: '2%',
				bottom: '5%',
				itemSize: 18
			},
			series: [
				{
					type: 'map',
					mapType: 'china',
					data: data,
					aspectScale: 0.8, // 地图长宽比
					height: '400px',
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: false,
							position: 'left'
						}
					},
					itemStyle: {
						normal: {
							areaColor: '#FFFFFF',
							borderWidth: 0.2
						},
						emphasis: {
							areaColor: '#EEEEEE',
							borderWidth: 0.5
						}
					}
				}
			]
		};
		return option;
	}

	productOptions(data) {
		return (
			<div className="option font-content-title">
				{data
					? data.map((product, key) => (
							<button
								key={key}
								type="button"
								style={
									this.state.productOption === 'allProduct' ? BUTTOMSTYLE : null
								}
								onClick={event => this.handleClick(event, product.id)}
							>
								{product ? product.name.substring(0, 6) : ''}
							</button>
						))
					: ''}
			</div>
		);
	}

	timeOptions(event) {
		return (
			<div className="option font-content-title">
				<button
					type="button"
					style={this.state.timeOption === 'allTime' ? BUTTOMSTYLE : null}
					onClick={event => this.handleClick(event, 'allTime')}
				>
					全部
				</button>
				<button
					type="button"
					style={this.state.timeOption === 'oneYear' ? BUTTOMSTYLE : null}
					onClick={event => this.handleClick(event, 'oneYear')}
				>
					1年
				</button>
				<button
					type="button"
					style={this.state.timeOption === 'oneMonth' ? BUTTOMSTYLE : null}
					onClick={event => this.handleClick(event, 'oneMonth')}
				>
					1个月
				</button>
				<button
					type="button"
					style={this.state.timeOption === 'oneWeek' ? BUTTOMSTYLE : null}
					onClick={event => this.handleClick(event, 'oneWeek')}
				>
					1周
				</button>
				<button
					type="button"
					style={this.state.timeOption === 'oneDay' ? BUTTOMSTYLE : null}
					onClick={event => this.handleClick(event, 'oneDay')}
				>
					1天
				</button>
			</div>
		);
	}

	goodLastestDataCard(title, data) {
		return (
			<div className="charts">
				{/* code:<Link to="/goodGeneral/122">122</Link>
				<span> </span>
				<Link to="/goodGeneral/RVKT6B1ZQ">RVKT6B1ZQ</Link>
				<span> </span>
				<Link to="/goodGeneral/9191">9191</Link>
				<span> </span>
				<Link to="/goodGeneral/NU5ZCZA0">NU5ZCZA0</Link> */}
				<div className="title">
					{/* {title} */}
					{/* <span className="goodSum">62,470</span> */}
					{this.productOptions(data)}
					{/* {this.timeOptions()} */}
				</div>
				<ul className="list-col">
					<ChinaMap option={this.mapOption(this.state.data)} />
				</ul>
			</div>
		);
	}

	render() {
		const goodMasters = this.props.goodMasters;
		return <div>{this.goodLastestDataCard('最近数据', goodMasters)}</div>;
	}
};

export default GoodLastestDataCard;
