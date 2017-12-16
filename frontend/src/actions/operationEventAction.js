import { operationEventConstants } from '../constants/operationEventConstants';
import { operationEventService } from '../services/operationEventService';

export const operationEventActions = { getAll };

const LOADINGTEXT = '加载中...';

function getAll(query, expand) {
	return dispatch => {
		dispatch(
			request(operationEventConstants.OPERATION_ALL_REQUEST, LOADINGTEXT)
		);

		operationEventService.getAll(query, expand).then(
			res => {
				dispatch(success(operationEventConstants.OPERATION_ALL_SUCCESS, res));
			},
			error => {
				console.log(error);
				dispatch(failure(operationEventConstants.OPERATION_ALL_FAILURE, error));
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
