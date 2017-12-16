import { customerConstants } from '../constants/customerConstants';
import { customerService } from '../services/customerService';

export const customerActions = {
	getAll,
	getCustomerDetail,
	getProgrammeList,
	getActivities,
	getRewardSummary
};

const searchText = '搜索中...';
const loadingText = '加载中...';

function getAll(query, size, pageNum) {
	return dispatch => {
		dispatch(request(customerConstants.CUSTOMER_GETALL_REQUEST, searchText));

		customerService.getAll(query, size, pageNum).then(
			res => {
				dispatch(success(customerConstants.CUSTOMER_GETALL_SUCCESS, res));
			},
			error => {
				dispatch(failure(customerConstants.CUSTOMER_GETALL_FAILURE, error));
			}
		);
	};
}

function getCustomerDetail(id) {
	return dispatch => {
		dispatch(request(customerConstants.CUSTOMER_DETAIL_REQUEST, loadingText));

		customerService.getCustomerDetail(id).then(
			res => {
				dispatch(success(customerConstants.CUSTOMER_DETAIL_SUCCESS, res));
			},
			error => {
				dispatch(failure(customerConstants.CUSTOMER_DETAIL_FAILURE, error));
			}
		);
	};
}

function getProgrammeList(id) {
	return dispatch => {
		dispatch(request(customerConstants.CUSTOMER_PROGRAMME_REQUEST, searchText));

		customerService.getProgrammeList(id).then(
			res => {
				dispatch(success(customerConstants.CUSTOMER_PROGRAMME_SUCCESS, res));
			},
			error => {
				dispatch(failure(customerConstants.CUSTOMER_PROGRAMME_FAILURE, error));
				console.log(error);
			}
		);
	};
}

function getActivities(id, programmeId) {
	return dispatch => {
		dispatch(request(customerConstants.CUSTOMER_ACTIVITY_REQUEST, searchText));
		customerService.getActivities(id, programmeId).then(
			res => {
				dispatch(success(customerConstants.CUSTOMER_ACTIVITY_SUCCESS, res));
			},
			error => {
				dispatch(failure(customerConstants.CUSTOMER_ACTIVITY_FAILURE, error));
			}
		);
	};
}

function getRewardSummary(
	customerId,
	programmeId,
	beginDate,
	endDate,
	interval
) {
	return dispatch => {
		dispatch(
			request(customerConstants.CUSTOMER_REWARDSUMMARY_REQUEST, searchText)
		);
		customerService
			.getRewardSummary(customerId, programmeId, beginDate, endDate, interval)
			.then(
				res => {
					dispatch(
						success(customerConstants.CUSTOMER_REWARDSUMMARY_SUCCESS, res)
					);
				},
				error => {
					dispatch(
						failure(customerConstants.CUSTOMER_REWARDSUMMARY_FAILURE, error)
					);
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
