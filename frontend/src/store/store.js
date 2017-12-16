/*
 see also:
 + http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
 + http://cn.redux.js.org/
*/

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// const logger = createLogger();

export const store = createStore(
	//load order is: reducer, inital_state, middleware.
	rootReducer,
	//log middleware must be at the end.
	applyMiddleware(thunk)
);
