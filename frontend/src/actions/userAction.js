import swal from 'sweetalert2';

import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../utils';
import { alertActions } from './';

export const userActions = {
	login,
	logout,
	switchLanguage,
	getUserById
};

function login(username, password) {
	return dispatch => {
		dispatch(request(userConstants.LOGIN_REQUEST, { username }));

		userService.login(username, password).then(
			res => {
				dispatch(success(userConstants.LOGIN_SUCCESS, res));
				userService.getLangByUserId(username).then(
					res => {
						dispatch(success(userConstants.LANGUAGE_SUCCESS, res));
						history.replace('/');
					}
				);
			},
			error => {
				dispatch(failure(userConstants.LOGIN_FAILURE, error));
				dispatch(alertActions.error(error));
			}
		);
	};
}

function logout() {
	if (userService.logout()) {
		history.replace('/login');
	}
	return { type: userConstants.LOGOUT };
}

function switchLanguage(language) {
	return dispatch => {
		dispatch(request(userConstants.LANGUAGE_REQUEST, '更新客户语言'));
		localStorage.setItem('lang', language);
		history.go(history.location.pathname);
	};
}

function getUserById(id) {
	return dispatch => {
		dispatch(request(userConstants.USER_REQUEST, '获取客户信息'));

		userService.getUserById(id).then(
			res => {
				dispatch(success(userConstants.USER_SUCCESS, res));
				localStorage.setItem('userLanguage', res.language);
			},
			error => {
				console.log(error);
				dispatch(failure(userConstants.USER_FAILURE, error));
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
function failure(type, msg, errorTips) {
	if (errorTips) {
		alert(errorTips);
	} else {
		swal({
			title: '异常!',
			text: '服务器异常!',
			type: 'error',
			position: 'top',
			// showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '知道了!',
			allowOutsideClick: false
		}).then(result => {
			// if (result.value) {
			//   swal(
			//     '棒!',
			//     '你真聪明',
			//     'success'
			//   )
			// }
		});
	}
	return { type: type, msg };
}
