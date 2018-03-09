import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
	<BrowserRouter>
		<div className='page-border'>
			<Header />
			<div className='wrapper'>
				<Switch>
					<Route path='/' exact={true} component={HomePage} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</div>
	</BrowserRouter>
);

export default AppRouter;
