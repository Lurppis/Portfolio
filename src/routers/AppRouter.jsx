import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ProjectListPage from '../pages/ProjectListPage';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
	<BrowserRouter>
		<div className='page-border'>
			<div className='container'>
				<Header />
				<Switch>
					<Route path='/portfolio' exact={true} component={HomePage} />
					<Route path='/projects' exact={true} component={ProjectListPage} />
					<Route path='/contact' exact={true} component={ContactPage} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
		</div>
	</BrowserRouter>
);

export default AppRouter;
