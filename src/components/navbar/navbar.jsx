import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import logo from '../../assets/crown.svg';

import './navbar.scss';

const Navbar = ({ currentUser }) => {
	return (
		<nav className="nav">
			<div className="container nav__container">
				<Link to="/">
					<img className="logo" src={logo} alt="Crwn Clothing" />
				</Link>

				<div className="nav__menu">
					<NavLink className="nav__link" to="/shop">
						Shop
					</NavLink>
					<NavLink className="nav__link" to="/contact">
						Contact
					</NavLink>
					{currentUser ? (
						<div onClick={()=> auth.signOut()} className="nav__link">
							Sign Out
						</div>
					) : (
						<NavLink className="nav__link" to="/authentication">
							Sign In
						</NavLink> 
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
