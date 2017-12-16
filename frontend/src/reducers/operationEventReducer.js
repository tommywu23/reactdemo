import { operationEventConstants } from '../constants/operationEventConstants';

export function operationEventReducer(state = {}, action) {
	switch (action.type) {
		case operationEventConstants.OPERATION_ALL_REQUEST:
			return { msg: action.msg };
		case operationEventConstants.OPERATION_ALL_SUCCESS:
			return { operationEvents: action.res, msg: action.msg };
		case operationEventConstants.OPERATION_ALL_FAILURE:
			return { msg: action.msg };
		default:
			return state;
	}
}
