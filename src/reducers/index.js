import { combineReducers } from 'redux';

import ProjectReducer from './projects_reducer';

const rootReducer = combineReducers({
	projects: ProjectReducer
});

export default rootReducer;