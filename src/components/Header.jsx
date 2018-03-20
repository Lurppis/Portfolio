import React from 'react';
import { NavLink } from 'react-router-dom';

import images from '../images/index';

const Header = () => (
	<header>
		<div className='row align-items-center'>
			<div className='col-xs-12 col-md-4 order-md-3 text-center'>
				<img className='img-center' src={images.logo} alt='logo img' />
			</div>
			<div className='col col-sm-6 col-md-2 order-md-1'>
				<div id='link'>
					<NavLink to='/portfolio' exact={true} activeClassName='active'>Home</NavLink>
				</div>
			</div>
			<div className='col col-sm-6 col-md-2 order-md-2 text-center text-md-left'>
				<div id='link'>
					<NavLink to='/projects' exact={true} activeClassName='active'>Projects</NavLink>
				</div>
			</div>
			<div className='col col-sm-6 col-md-2 order-md-4 text-center text-md-right'>
				<div id='link'>
					<NavLink to='/contact' exact={true} activeClassName='active'>Contact</NavLink>
				</div>
			</div>
			<div className='col col-sm-6 col-md-2 order-md-5 text-center text-md-right'>
				<div id='link'>
					<a href='https://www.dropbox.com/s/i1odbaqfrs0nz4e/Pilarczyk-Marcin-CV.pdf?dl=0' target='_blank'>Resume</a>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
