import React, { Component } from 'react';

import './GoodFakeSubPage.css';
import GoodFake from '../Cards/GoodFakeCard';

const GoodFakeSubPage = class extends Component {
	render() {
		return (
			<div style={this.props.style}>
				<GoodFake />
			</div>
		);
	}
};

export default GoodFakeSubPage;
