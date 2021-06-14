import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/crown.svg';

import './navbar.scss';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container nav__container">
				<Link to="/">
					<img className="logo" src={logo} alt="Crwn Clothing" />
				</Link>

            <div className="nav__menu">
               <NavLink className="nav__link" to="/shop">Shop</NavLink>
               <NavLink className="nav__link" to="/contact">Contact</NavLink>
               <NavLink className="nav__link" to="/authentication">SignIn</NavLink>
            </div>
			</div>
		</nav>
	);
};

export default Navbar;
