import { request, history } from '../utils';

export const goodService = {
	getGoodByCode,
	getAggregationGoods
};

//let auth = JSON.parse(localStorage.getItem('auth'));
//let token = auth ? 'Bearer ' + auth.access_token : '';
let goodRequest = request.rootUrl + request.good;

const reqOptions = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json'
	}
};

async function getGoodByCode(code, expand) {
	let req = goodRequest + code + '?expand=' + expand;
	const resp = await fetch(req, reqOptions);
	return handleResposeWithBck(resp, '货物编码不正确!');
}

async function getAggregationGoods(type) {
	let req = goodRequest + 'aggregation?type=' + type;
	const resp = await fetch(req, reqOptions);
	return handleRespose(resp);
}

async function handleResposeWithBck(resp, errorMsg) {
	if (resp.ok) {
		return await resp.json();
	} else {
		history.goBack();
		alert(errorMsg);
		return null;
	}
}

async function handleRespose(resp) {
	if (resp.ok) {
		return await resp.json();
	} else {
		// alert('数据有误');
		return null;
	}
}
