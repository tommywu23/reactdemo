import { request } from '../utils';

export const operationEventService = {
	getAll
};

const customerRequest = request.rootUrl + request.operationevent;

async function getAll(query, expand) {
	let req = customerRequest + '?query=' + query + '&expand=' + expand;
	const resp = await fetch(req, request.reqOptions());
	return request.handleRespose(resp);
}
