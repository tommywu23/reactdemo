import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

import GoodLastestDataCard from './GoodLastestDataCard';
import TrendDataCard from './TrendDataCard';
import './MapWithDataStatistics.css';
import LineChart from '../Charts/LineChart/LineChart';

const MapWithDataStatistics = ({ statistic, text, num, up, chartData }) => (
	<div>
		<TrendDataCard
			statistic={statistic}
			text={text}
			num={num}
			up={up}
			chartData={chartData}
		/>
		<div className="offset-2border" />
		<div className="border-inner">
			<GoodLastestDataCard />
		</div>
	</div>
);

export default MapWithDataStatistics;
