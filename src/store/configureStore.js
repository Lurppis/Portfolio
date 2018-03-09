import { createStore, combineReducers } from 'redux';

import ProjectReducer from '../reducers/projects_reducer';

export default () => {
	const store = createStore(
		combineReducers({
			projects: ProjectReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};