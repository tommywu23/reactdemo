import React, { Component } from 'react';

import GoodPacking from '../Cards/GoodPackingCard';
import DisplayPackageFocusMessage from '../Cards/GoodCard';

const GoodGeneralPackagingSubPage = class extends Component {
	render() {
		let returnDOM;
		switch (this.props.parent) {
			case 'GoodPacking':
				returnDOM = <GoodPacking />;
				break;
			case 'GoodGeneralPacking':
				// const goodPacking = this.props.goodPacking
				// 	? this.props.goodPacking[0]
				// 	: {};
				const container = this.props.container;
				let packed = {};
				let packages = [];
				if (container) {
					packed.operation = 'packed in ';
					packed.message = container.codes[0].code;
					packages.push(packed);
				}
				// console.log(goodPacking);
				// console.log(container);
				returnDOM = (
					<DisplayPackageFocusMessage title="包装" packages={packages} />
				);
				break;
			default:
		}
		return <div className="page">{returnDOM}</div>;
	}
};

// const packages = [
// 	{
// 		operation: 'packed in ',
// 		message: 'case #asf3uouy'
// 	},
// 	{
// 		operation: 'in 6th position ',
// 		message: ''
// 	},
// 	{
// 		operation: 'unpacking from ',
// 		message: 'case #w4r824u'
// 	},
// 	{
// 		operation: 'unpacking from ',
// 		message: 'case #4r824u'
// 	}
// ];

export default GoodGeneralPackagingSubPage;
