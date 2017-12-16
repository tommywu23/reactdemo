import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const MfgRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isLogin() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{ pathname: '/login', state: { from: props.location } }}
				/>
			)}
	/>
);

function isLogin() {
	if (
		localStorage.getItem('auth') &&
		localStorage.getItem('user') &&
		localStorage.getItem('loginTime') &&
		localStorage.getItem('expiryTime') &&
		new Date().getTime() / 1000 - localStorage.getItem('loginTime') <
			localStorage.getItem('expiryTime')
	) {
		return true;
	} else {
		removeLocalStorage();
		return false;
	}
}

function removeLocalStorage() {
	localStorage.removeItem('auth');
	localStorage.removeItem('user');
	localStorage.removeItem('loginTime');
	localStorage.removeItem('expiryTime');
	localStorage.removeItem('userLanguage');
}
