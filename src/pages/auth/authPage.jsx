import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';

import './authPage.scss';

const AuthPage = () => {
	return (
		<div className="container auth__container">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default AuthPage;
