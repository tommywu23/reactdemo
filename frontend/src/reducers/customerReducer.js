import { customerConstants } from '../constants/customerConstants';

export function customerReducer(state = {}, action) {
	switch (action.type) {
		case customerConstants.CUSTOMER_GETALL_REQUEST:
		case customerConstants.CUSTOMER_DETAIL_REQUEST:
		case customerConstants.CUSTOMER_PROGRAMME_REQUEST:
		case customerConstants.CUSTOMER_ACTIVITY_REQUEST:
		case customerConstants.CUSTOMER_REWARDSUMMARY_REQUEST:
			return { msg: action.msg };
		case customerConstants.CUSTOMER_GETALL_SUCCESS:
			return { customerStatistics: action.res, msg: action.msg };
		case customerConstants.CUSTOMER_DETAIL_SUCCESS:
			return { customerDetail: action.res, msg: action.msg };
		case customerConstants.CUSTOMER_PROGRAMME_SUCCESS:
			return { programmeList: action.res, msg: action.msg };
		case customerConstants.CUSTOMER_ACTIVITY_SUCCESS:
			return { customerActivity: action.res, msg: action.msg };
		case customerConstants.CUSTOMER_REWARDSUMMARY_SUCCESS:
			return { rewardSummary: action.res, msg: action.msg };
		case customerConstants.CUSTOMER_GETALL_FAILURE:
		case customerConstants.CUSTOMER_DETAIL_FAILURE:
		case customerConstants.CUSTOMER_PROGRAMME_FAILURE:
		case customerConstants.CUSTOMER_ACTIVITY_FAILURE:
		case customerConstants.CUSTOMER_REWARDSUMMARY_FAILURE:
			return { msg: action.error };
		default:
			return state;
	}
}
