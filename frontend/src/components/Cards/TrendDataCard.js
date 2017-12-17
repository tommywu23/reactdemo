import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import LineChart from '../Charts/LineChart/LineChart';

import './TrendDataCard.css';

const TrendDataCard = ({ statistic, text, num, up, chartData }) => (
	// <div className="tab-content">
	<div className="border-inner statistics">
		<div className="statistics-left">
			<div className="text-group">
				{statistic !== undefined ? statistic : null} <br />
				<span className="num-data">{num}</span>
			</div>
			<div className="text-data">
				{text.split('<br>').map(
					(item, key) =>
						key + 1 !== text.split('<br>').length ? (
							<span key={key} className="block-text">
								{item}
							</span>
						) : (
							<span key={key}>{item}</span>
						)
				)}
				<span className="red-text">↑{up}%</span>
			</div>
		</div>
		<div className="statistics-right">
			<ReactEchartsCore
				echarts={echarts}
				option={chartData}
				notMerge={true}
				lazyUpdate={true}
			/>
		</div>
	</div>
	// </div>
);

export default TrendDataCard;
