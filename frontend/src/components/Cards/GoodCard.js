import React from 'react';

import './GoodCard.css';
import './Card.css';

const DisplayPackageFocusMessage = ({ title, packages }) => (
	<div className="font-content-title">
		<div className="title">{title}</div>
		<ul className="list-col">
			{Object.keys(packages).map(key => (
				<li key={key.toString()}>
					{packages[key].operation}
					<span
						className={
							packages[key].className ? packages[key].className : 'font-content'
						}
					>
						&nbsp;&nbsp;{packages[key].message}
					</span>
				</li>
			))}
		</ul>
	</div>
);

const ProductAddress = ({ title, objects }) => (
	<div className="card font-content-title">
		<div className="title">{title}</div>
		<ul className="list-col">
			<img className="addressProduct" src={objects.url} alt="" />
		</ul>
	</div>
);

export default DisplayPackageFocusMessage;

export { ProductAddress };
