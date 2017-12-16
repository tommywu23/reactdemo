import { request } from '../utils';

export const goodMasterService = {
	getWithTypes
};

let goodMasterRequest = request.rootUrl + request.goodMaster;

const reqOptions = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json'
	}
};

async function getWithTypes(types) {
	let req = goodMasterRequest + 'list?types=' + types;
	const resp = await fetch(req, reqOptions);
	return handleRespose(resp);
}

async function handleRespose(resp) {
	if (resp.ok) {
		return await resp.json();
	} else {
		alert('系统异常');
		return null;
	}
}
