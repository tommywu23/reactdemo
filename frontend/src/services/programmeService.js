import { request } from '../utils';

export const programmeService = {
	getAll,
	getActivitiesByProgrammeId
};

let programmeRequest = request.rootUrl + request.programme;

const getReqOptions = {
	method: 'GET',
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json'
	}
};

async function getAll() {
	let req = programmeRequest;
	const resp = await fetch(req, getReqOptions);
	return handleRespose(resp);
}

async function getActivitiesByProgrammeId(id) {
	let req = programmeRequest + id + '/activities';
	const resp = await fetch(req, getReqOptions);
	return handleRespose(resp);
}

async function handleRespose(resp) {
	if (resp.ok) {
		return await resp.json();
	} else {
		alert('数据有误');
		return null;
	}
}
