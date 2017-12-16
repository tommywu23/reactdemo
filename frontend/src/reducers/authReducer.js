import { userConstants } from '../constants';

let auth = JSON.parse(localStorage.getItem('auth'));
const initialState = auth ? { loggedIn: true, auth } : {};

export function authentication(state = initialState, action) {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return { loggingIn: true, auth: action.res };
		case userConstants.LOGIN_SUCCESS:
			return { loggedIn: true, auth: action.res };
		case userConstants.LOGIN_FAILURE || userConstants.LOGOUT:
			return {};

		case userConstants.LANGUAGE_REQUEST:
		case userConstants.USER_REQUEST:
			return { msg: action.msg };
		case userConstants.LANGUAGE_SUCCESS:
			return { lang: action.res };
		case userConstants.USER_SUCCESS:
			return { userInfo: action.res };
		case userConstants.LANGUAGE_FAILURE:
		case userConstants.USER_FAILURE:
			return { msg: action.msg };
		default:
			return state;
	}
}
