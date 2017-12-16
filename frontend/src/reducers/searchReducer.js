import { searchConstants } from '../constants/searchConstants';

export function searchReducer(state = {}, action) {
	switch (action.type) {
		case searchConstants.SEARCH_GETALL_REQUEST:
			return { msg: action.msg };
		case searchConstants.SEARCH_GETALL_SUCCESS:
			return { searchHistory: action.res, msg: action.msg };
		case searchConstants.SEARCH_GETALL_FAILURE:
			return { msg: action.msg };
		default:
			return state;
	}
}
