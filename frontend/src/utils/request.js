const env = require('../../package.json');

const mode = env.env.mode;
const rootUrl = env.env[mode];

const customer = 'api/customers/';
const good = 'api/goods/';
const goodMaster = 'api/goodmasters/';
const search = 'api/search/';
const programme = 'api/programmes/';
const operationevent = 'api/operationevents/';
const user = 'api/user/';

function reqOptions(method, contentType, body) {
	let realMethod = method || 'GET';
	let realContentType = contentType || 'application/json';
	let reqOptions = {
		method: realMethod,
		credentials: 'include',
		headers: {
			'Content-Type': realContentType,
			'Cache-Control': 'no-cache'
		},
		body: JSON.stringify(body)
	};
	if (body) {
		reqOptions.body = JSON.stringify(body);
	}
	return reqOptions;
}

async function handleRespose(resp, errorAlert) {
	errorAlert = errorAlert || '数据有误';
	if (resp.ok) {
		return await resp.json();
	} else {
		alert(errorAlert);
		return null;
	}
}

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
		return false;
	}
}

export const request = {
	isLogin,
	reqOptions,
	handleRespose,
	rootUrl,
	customer,
	good,
	goodMaster,
	search,
	programme,
	operationevent,
	user
};
