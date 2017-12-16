import { goodMasterConstants } from '../constants/goodMasterConstants';
import { goodMasterService } from '../services/goodMasterService';

export const goodMasterActions = { getWithTypes };

function getWithTypes(types) {
	return dispatch => {
		dispatch(request(goodMasterConstants.GOODMASTER_TYPES_REQUEST, '搜索中...'));

		goodMasterService.getWithTypes(types).then(
			res => {
				console.log(res);
				dispatch(success(goodMasterConstants.GOODMASTER_TYPES_SUCCESS, res));
			},
			error => {
				dispatch(failure(goodMasterConstants.GOODMASTER_TYPES_FAILURE, error));
			}
		);
	};
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
