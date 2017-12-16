import React, { Component } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';

import './StatisticsBlock.css';

const StatisticsBlock = ({ statistic, text, num, up }) => (
	<div className="statistics-left">
		<div className="text-group">
			{statistic !== undefined ? statistic : null} <br/>
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
);

export default StatisticsBlock;
