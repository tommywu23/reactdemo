import { request, history } from '../utils';

export const customerService = {
	getAll,
	getCustomerMap,
	getCustomerDetail,
	getProgrammeList,
	getActivities,
	getRewardSummary
};

let customerRequest = request.rootUrl + request.customer;

const reqOptions = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json',
		'Cache-Control': 'no-cache'
	}
};

async function getAll(query, size, pageNum) {
	let req = customerRequest + 'last';
	const resp = await fetch(req, reqOptions);
	const data = await resp.json();
	let object = {};
	object.customer = data.content;
	return object;
}

async function getCustomerMap() {
	let req = '/json/customerchinamap.json';
	const resp = await fetch(req, reqOptions);
	return handleRespose(resp);
}

async function getCustomerDetail(id) {
	//let req = '/json/customerdetail.json';
	let req = customerRequest + '?customerId=' + id;
	const resp = await fetch(req, reqOptions);
	return handleResposeWithBck(resp, '客户编码不正确!');
}

async function getProgrammeList(id) {
	let req = customerRequest + id + '/points';
	const resp = await fetch(req, reqOptions);
	let data;
	handleRespose(resp).then(res => (data = res));
	return await resp.json();
}

async function getActivities(id, programmeId) {
	let req = customerRequest + id + '/activities';
	if (programmeId) {
		req = req + '?programmeId=' + programmeId;
	}
	const resp = await fetch(req, reqOptions);
	return handleRespose(resp);
}

async function getRewardSummary(
	customerId,
	programmeId,
	beginDate,
	endDate,
	interval
) {
	let req =
		customerRequest +
		customerId +
		'/summary/rewards?programmeId=' +
		programmeId +
		'&beginDate=' +
		beginDate +
		'&endDate=' +
		endDate +
		'&interval=' +
		interval;
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
		alert('系统异常');
		return null;
	}
}
