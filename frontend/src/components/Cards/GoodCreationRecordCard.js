import React from 'react';
import './GoodCreationRecordCard.css';

function GoodCreationRecordCard(props) {
	const tableData = props.tableData;
	const fontColor = props.highlight == undefined ? "#000000": props.highlight;
	let data = tableData.map((value, index) => (
		<tr key={index.toString()}>
      {Object.keys(value).map(key => (
        <td key={key}>{value[key]}</td>
      ))}
      {props.arrowHide != "true" ? <td className="td-arrow"><img src="../../images/next.svg"/></td> : null}
		</tr>
	));
	return (
		<div className="table-font">
			<div className="font-content-title">{props.title}</div>
			<table className="record font-content-title" cellPadding="0" cellSpacing="0">
				<thead>
					<tr>
            {Object.keys(props.headerList).map(key => (
              <th key={key}>{props.headerList[key]}</th>
            ))}
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</table>
		</div>
	);
}

export default GoodCreationRecordCard;
