import { request } from '../utils';

export const searchService = {
	createHistory,
	getAll,
	deleteOne
};

let searchRequest = request.rootUrl + request.search;

async function createHistory(name, link) {
	let req = searchRequest;
	let search = {};
	search.name = name;
	search.link = link;
	let reqOptions = {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(search)
	};
	const resp = await fetch(req, reqOptions);
	return await resp.json();
}

async function getAll() {
	let req = searchRequest;
	let reqOptions = {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const resp = await fetch(req, reqOptions);
	return await resp.json();
}

async function deleteOne(id) {
	let req = searchRequest + id;
	let reqOptions = {
		method: 'DELETE',
		credentials: 'include'
	};
	await fetch(req, reqOptions);
}
