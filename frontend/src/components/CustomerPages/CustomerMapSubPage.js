import React from 'react';

import './CustomerMapSubPage.css';

import CustomerMap from '../Cards/CustomerMapCard';

const CustomerMapSubPage = ({ customerMap, barTips }) => (
	<div className="page">
		<CustomerMap data={customerMap} barTips={barTips} />
	</div>
);

export default CustomerMapSubPage;
