import React from 'react';
import CustomerHistoryCard from '../Cards/CustomerHistoryCard';

import './HistorySubPage.css';

const HistorySubPage = ({ activities }) => (
	<div className="page">
		<CustomerHistoryCard parent="History" activities={activities} />
	</div>
);

export default HistorySubPage;
