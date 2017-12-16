import { goodConstants } from '../constants/goodConstants';
import { goodService } from '../services/goodService';
export const goodActions = { getGoodByCode, getAggregationGoods };

function getGoodByCode(code, expand) {
	return dispatch => {
		dispatch(request(goodConstants.GOOD_BY_CODE_REQUEST, '加载中...'));

		goodService.getGoodByCode(code, expand).then(
			res => {
				dispatch(success(goodConstants.GOOD_BY_CODE_SUCCESS, res));
			},
			error => {
				dispatch(failure(goodConstants.GOOD_BY_CODE_FAILURE, error));
			}
		);
	};
}

function getAggregationGoods(type) {
	return dispatch => {
		dispatch(request(goodConstants.GOOD_AGGREGATION_REQUEST, '加载中...'));

		goodService.getAggregationGoods(type).then(
			res => {
				dispatch(success(goodConstants.GOOD_AGGREGATION_SUCCESS, res));
			},
			error => {
				dispatch(failure(goodConstants.GOOD_AGGREGATION_FAILURE, error));
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
	// alert('系统异常');
	return { type: type, msg };
}
