import React from 'react';
import './styles.scss';

const Header = ({ children }) => {
	return (
		<div className='header'>
			<a>Go Home</a>
			<h1>Reddit Clone!</h1>
			<p>Username</p>
		</div>
	);
};

export default Header;
