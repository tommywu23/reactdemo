import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './containers';
//import 'bootstrap/dist/css/bootstrap.css';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
