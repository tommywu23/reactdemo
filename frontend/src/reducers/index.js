import { combineReducers } from 'redux';

import { alert } from './alertReducer';
import { authentication } from './authReducer';
import { customerReducer } from './customerReducer';
import { goodReducer } from './goodReducer';
import { goodMasterReducer } from './goodMasterReducer';
import { searchReducer } from './searchReducer';
import { programmeReducer } from './programmeReducer';
import { operationEventReducer } from './operationEventReducer';

const rootReducer = combineReducers({
	authentication,
	alert,
	customerReducer,
	goodReducer,
	goodMasterReducer,
	searchReducer,
	programmeReducer,
	operationEventReducer
});

export default rootReducer;
