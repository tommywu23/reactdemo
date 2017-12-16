import { goodMasterConstants } from '../constants/goodMasterConstants';

export function goodMasterReducer(state = {}, action) {
	switch (action.type) {
		case goodMasterConstants.GOODMASTER_TYPES_REQUEST:
			return { msg: action.msg };
		case goodMasterConstants.GOODMASTER_TYPES_SUCCESS:
			return { goodMasters: action.res, msg: action.msg };
		case goodMasterConstants.GOODMASTER_TYPES_FAILURE:
			return { msg: action.msg };
		default:
			return state;
	}
}
