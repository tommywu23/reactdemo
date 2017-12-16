import { searchConstants } from '../constants/searchConstants';
import { searchService } from '../services/searchService';

export const searchActions = { createHistory, getAll, deleteOne };

function createHistory(name, link) {
	searchService.createHistory(name, link);
}

function getAll() {
	return dispatch => {
		dispatch(request(searchConstants.SEARCH_GETALL_REQUEST, '加载中...'));

		searchService.getAll().then(
			res => {
				dispatch(success(searchConstants.SEARCH_GETALL_SUCCESS, res));
			},
			error => {
				dispatch(failure(searchConstants.SEARCH_GETALL_FAILURE, error));
			}
		);
	};
}

function deleteOne(id) {
	searchService.deleteOne(id);
}

function request(type, msg) {
	return { type: type, msg };
}
function success(type, res) {
	return { type: type, res };
}
function failure(type, msg) {
	alert('系统异常');
	return { type: type, msg };
}
