import React, { Component } from 'react';
import intl from 'react-intl-universal';

import './TitleWithTime.css';

const TimeTab = ({ timeTab, selectTimeTab }) => (
	<div className="title-time buttom-border">
		<div className="time-text">
			<span
				className={timeTab == 'day' ? 'selected' : null}
				onClick={selectTimeTab}
			>
				{intl.get('day')}
			</span>
			<span
				className={timeTab == 'week' ? 'selected' : null}
				onClick={selectTimeTab}
			>
				{intl.get('week')}
			</span>
			<span
				className={timeTab == 'month' ? 'selected' : null}
				onClick={selectTimeTab}
			>
				{intl.get('month')}
			</span>
			<span
				className={timeTab == undefined ? 'selected' : null}
				onClick={selectTimeTab}
			>
				{intl.get('all')}
			</span>
		</div>
	</div>
);

export default TimeTab;
