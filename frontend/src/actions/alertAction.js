import { alertConstants } from '../constants';

export const alertActions = {
	success,
	error,
	clear
};

function success(msg) {
	return { type: alertConstants.SUCCESS, msg };
}

function error(msg) {
	return { type: alertConstants.ERROR, msg };
}

function clear(msg) {
	return { type: alertConstants.CLEAR, msg };
}
