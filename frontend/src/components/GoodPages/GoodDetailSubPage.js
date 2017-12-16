import React from 'react';

import './GoodDetailSubPage.css';
import GoodInfoCard from '../Cards/GoodInfoCard';

const GoodDetailSubPage = ({
	good,
	goodMasterPic,
	goodPacking,
	goodCreation,
	goodDistribution,
	goodConsumption
}) => (
	<div className="page">
		<GoodInfoCard
			good={good}
			goodMasterPic={goodMasterPic}
			goodCreation={goodCreation}
			goodPacking={goodPacking}
			goodDistribution={goodDistribution}
			goodConsumption={goodConsumption}
		/>
	</div>
);

export default GoodDetailSubPage;
