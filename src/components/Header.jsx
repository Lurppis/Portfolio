import React from 'react';
import { NavLink } from 'react-router-dom';

import mainLogo from '../images/logo/logo.svg';

const Header = () => (
	<header>
		<ul className='nav'>
			<li><NavLink to='/' className='text-left' exact={true} activeClassName='active'>Home</NavLink></li>
			<li><NavLink to='/about' className='text-left' exact={true} activeClassName='active'>About</NavLink></li>
			<li id='logo'>
				<img src={mainLogo} alt='logo img' />
			</li>
			<li><NavLink to='/about' className='text-right' exact={true} activeClassName='active'>About</NavLink></li>
			<li><NavLink to='/about' className='text-right' exact={true} activeClassName='active'>About</NavLink></li>
		</ul>
	</header>
);

export default Header;
