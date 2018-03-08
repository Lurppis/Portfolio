import { createStore } from 'redux';

export default () => {
	const store = createStore(
		//combineReducers({}),
		store => store,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};