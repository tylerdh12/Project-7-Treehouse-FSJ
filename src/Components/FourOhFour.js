import React from 'react';
import { NavLink } from 'react-router-dom';

const FourOhFour = ({ location }) => {
	return (
		<div className='container'>
			<h1>404 Error</h1>
			<h3>
				"<code>{location.pathname}</code>" Is not available.
			</h3>
			<h3>
				We have encountered an error while looking for the page you requested.
			</h3>
			<NavLink to={'/'}>Return Home</NavLink>
		</div>
	);
};

export default FourOhFour;
