import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ProductGroupCard from './ProductGroupCard';
import TimeTab from './TimeTab';
import intl from 'react-intl-universal';

import './TitleWithTime.css';

const groupList = ['Chivas', 'Martell', "Ballantile's"];

const TitleWithTime = ({ title, type, timeTab }) => (
	<div>
		<div className="title-name">
			<span>{title}</span>
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<NavigationArrowDropDown />
			</MuiThemeProvider>
			{type === 'needGroup' ? <ProductGroupCard groupList={groupList} /> : null}
			{type === 'goodStatistics' ? (
				<div className="goodStatistics-select">
					<div className="select-div">
						<span className="select-text">{intl.get('from')}</span>
						<select className="select">
							<option>DC {intl.get('send.out')}</option>
						</select>
					</div>
					<div>
						<span className="select-text">{intl.get('to')}</span>
						<select className="select">
							<option>{intl.get('customer.scan')}</option>
						</select>
						<span className="query-button">{intl.get('search')}</span>
					</div>
				</div>
			) : null}
		</div>
		<TimeTab timeTab={timeTab} />
	</div>
);

export default TitleWithTime;
