import React from 'react';

import './CustomerConsumptionSubPage.css';
import CustomerConsumption from '../Cards/CustomerConsumptionCard';

const CustomerConsumptionSubPage = ({ goodConsumption, barTips }) => (
	<CustomerConsumption data={goodConsumption} barTips={barTips} />
);

export default CustomerConsumptionSubPage;
