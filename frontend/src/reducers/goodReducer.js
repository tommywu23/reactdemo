import { goodConstants } from '../constants/goodConstants';

export function goodReducer(state = {}, action) {
	switch (action.type) {
		case goodConstants.GOOD_BY_CODE_REQUEST:
		case goodConstants.GOOD_AGGREGATION_REQUEST:
			return { msg: action.msg };
		case goodConstants.GOOD_BY_CODE_SUCCESS:
			return { good: action.res, msg: action.msg };
		case goodConstants.GOOD_AGGREGATION_SUCCESS:
			return { goodsAggregation: action.res, msg: action.msg };
		case goodConstants.GOOD_BY_CODE_FAILURE:
		case goodConstants.GOOD_AGGREGATION_FAILURE:
			return { msg: action.msg };
		default:
			return state;
	}
}
