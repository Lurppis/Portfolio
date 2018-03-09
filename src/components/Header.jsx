import React from 'react';
import { NavLink } from 'react-router-dom';

import mainLogo from '../images/logo/logo.svg';

const Header = () => (
	<header>
		<div className='row align-items-center'>
			<div className='col-xs-12 col-md-4 order-md-3'>
				<img src={mainLogo} alt='logo img' />
			</div>
			<div className='col col-sm-6 col-md-2 order-md-1 text-center text-md-left'>
				<div id='link'>
					<NavLink to='/' exact={true} activeClassName='active'>Home</NavLink>
				</div>
			</div>
			<div className='col col-sm-6 col-md-2 order-md-2 text-center text-md-left'>
				<div id='link'>
					<NavLink to='/projects' exact={true} activeClassName='active'>Projects</NavLink>
				</div>
			</div>
			<div className='col col-sm-6 col-md-2 order-md-4 text-center text-md-right'>
				<div id='link'>
					<NavLink to='/projects' exact={true} activeClassName='active'>Socials</NavLink>
				</div>
			</div>
			<div className='col col-sm-6 col-md-2 order-md-5 text-center text-md-right'>
				<div id='link'>
					<NavLink to='/projects' exact={true} activeClassName='active'>Resume</NavLink>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
