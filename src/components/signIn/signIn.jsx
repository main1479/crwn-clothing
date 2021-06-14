import React from 'react';
import Form from './../common/form/form';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.scss';

class SignIn extends Form {
	state = { data: { email: '', password: '' } };

	doSubmit() {
		console.log(this.state.data);
	}

	signInWithGoogle = () => {
		console.log('worling');
	};
	render() {
		return (
			<form className="form form__signin" onSubmit={this.handleSubmit}>
				<h2 className="heading">I already have an account</h2>
				<p className="heading--sub">Sign in with email and password</p>

				{this.renderInput('email', 'Email', '', true, 'email')}
				{this.renderInput('password', 'Password', '', true, 'password')}
				<div className="buttons">
					{this.renderSubmitButton('Sign In', 'btn__signin')}
					<button onClick={signInWithGoogle} className="btn btn__primary btn__google">
						Sign In With Google
					</button>
				</div>
			</form>
		);
	}
}

export default SignIn;
