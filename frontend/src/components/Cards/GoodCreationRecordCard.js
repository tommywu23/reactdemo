import React from 'react';
import './GoodCreationRecordCard.css';
import index from 'material-ui/SvgIcon';

function GoodCreationRecordCard(props) {
	const tableData = props.tableData;
	const fontColor = props.highlight == undefined ? "#000000": props.highlight;
	
	let data = tableData.map( (value, index) => {
		return <tr key={index.toString()}>
				 {Object.keys(value).map( key =>{
					return (<td key={key}>{value[key]}</td>)
					switch(key) {
						case 'yield':{
							return (<td key={key}>{value[key]}</td>);
						}
						default :return (<td key={key}>{value[key]}</td>)
					}
				})}
		
		</tr>
	})
	console.log("data:",data)

	// let data = tableData.map((value, index) => (
	// 	<tr key={index.toString()}>
  //     {Object.keys(value).map(key => (
	// 			key ==='yield' ? <td key={key}>{value[key].split(' ')[0]}1</td> : <td key={key}>{value[key]}2</td>
        
  //     ))}
  //     {props.arrowHide != "true" ? <td className="td-arrow"><img src="../../images/next.svg"/></td> : null}
	// 	</tr>
	// ));
	return (
		<div className="table-font">
			<div className="font-content-title">{props.title}</div>
			<table className="record font-content-title" cellPadding="0" cellSpacing="0">
				<thead>
					<tr>
            {Object.keys(props.headerList).map(key => (
              <th className={props.headerList[key].col} key={key} style={{ width:props.headerList[key].col+'px' }} >{props.headerList[key].name}</th>
            ))}
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</table>
		</div>
	);
}

export default GoodCreationRecordCard;
