import React from 'react';
import './Card.css';
import './HistoryRecordCard.css';

function HistoryRecordCard(props) {
	console.log(props);
	const tableData = props.tableData;
	const fontColor = props.highlight == undefined ? '#000000' : props.highlight;
	const data = tableData.map((value, index) => (
		<tr key={index.toString()}>
			<td>
				<font color={fontColor}>{value.date}</font>
			</td>
			<td>{value.message}</td>
			<td>{value.detail}</td>
		</tr>
	));
	return (
		<div className="table-font">
			{props.title ? (
				<div className="font-content-title mar-up-down-10">{props.title}</div>
			) : null}
			<table
				className="record font-content-title"
				cellPadding="0"
				cellSpacing="0"
			>
				<thead>
					<tr>
						<th>{props.tableHeader.date}</th>
						<th>{props.tableHeader.message}</th>
						<th>{props.tableHeader.detail}</th>
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</table>
		</div>
	);
}

export default HistoryRecordCard;
