import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ProjectListPage from '../pages/ProjectListPage';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
	<BrowserRouter>
		<div className='page-border'>
			<div className='container'>
				<Header />
				<div className='wrapper'>
					<Switch>
						<Route path='/' exact={true} component={HomePage} />
						<Route path='/projects' exact={true} component={ProjectListPage} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</div>
	</BrowserRouter>
);

export default AppRouter;
