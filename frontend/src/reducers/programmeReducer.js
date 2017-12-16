import { programmeConstants } from '../constants/programmeConstants';

export function programmeReducer(state = {}, action) {
	switch (action.type) {
		case programmeConstants.PROGRAMME_GETALL_REQUEST:
		case programmeConstants.PROGRAMME_ACTIVITY_REQUEST:
			return { msg: action.msg };
		case programmeConstants.PROGRAMME_GETALL_SUCCESS:
			return { programmes: action.res, msg: action.msg };
		case programmeConstants.PROGRAMME_ACTIVITY_SUCCESS:
			return { programmeActivities: action.res, msg: action.msg };
		case programmeConstants.PROGRAMME_GETALL_FAILURE:
		case programmeConstants.PROGRAMME_ACTIVITY_FAILURE:
			return { msg: action.msg };
		default:
			return state;
	}
}
