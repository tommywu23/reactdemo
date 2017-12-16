import { request, history } from '../utils';

export const userService = {
	login,
	logout,
	getLangByUserId
};

const serviceUri = request.rootUrl;
const userRequest = request.rootUrl + request.user;

function login(name, pwd) {
	let req = serviceUri + 'login?username=' + name + '&password=' + pwd;
	const reqOptions = {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	return fetch(req, reqOptions)
		.then(handleResponse)
		.then(auth => {
			if (auth) {
				localStorage.setItem('auth', JSON.stringify(auth));
				let user = JSON.stringify(name)
					? JSON.stringify(name).replace(/"/g, '')
					: '';
				localStorage.setItem('user', user);
				localStorage.setItem('loginTime', new Date().getTime() / 1000);
				localStorage.setItem('expiryTime', auth['expires_in']);
			}
			return auth;
		});
}

function logout() {
	localStorage.removeItem('auth');
	localStorage.removeItem('user');
	localStorage.removeItem('loginTime');
	localStorage.removeItem('expiryTime');
	localStorage.removeItem('lang');
	history.replace('/login');
	return true;
}

function getLangByUserId(userId) {
	let req = userRequest + userId;
	return fetch(req, request.reqOptions())
		.then(handleResponse)
		.then(res => {
			localStorage.setItem('lang', res.langKey);
			return res.langKey;
		});
}

function handleResponse(res) {
	if (!res.ok) {
		return Promise.reject(res.statusText);
	}

	return res.json();
}
