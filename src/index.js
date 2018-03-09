import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './styles/main.css';

// Reducers
import reducers from './reducers';

// Router
import AppRouter from './routers/AppRouter';

import registerServiceWorker from './registerServiceWorker';

// Store
//import configureStore from './store/configureStore';
//const store = configureStore();
const createStoreWithMiddleware = applyMiddleware()(createStore);

const app = (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
