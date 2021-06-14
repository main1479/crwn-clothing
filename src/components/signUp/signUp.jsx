import React from 'react';
import Form from './../common/form/form';

class SignUp extends Form {
	state = {
		data: {
			name: '',
			emailId: '',
			newPassword: '',
			confirmPassword: '',
		},
	};
	doSubmit() {
		console.log(this.state.data);
	}

	signInWithGoogle = () => {
		console.log('working');
	};
	render() {
		return (
			<form className="form form__signin" onSubmit={this.handleSubmit}>
				<h2 className="heading">I do not have an account</h2>
				<p className="heading--sub">Sign up with your email and password</p>

				{this.renderInput('name', 'Name', '', true)}
				{this.renderInput('emailId', 'Email', '', true, 'email')}
				{this.renderInput('newPassword', 'Password', '', true, 'password')}
				{this.renderInput('confirmPassword', 'Confirm Password', '', true, 'password')}
				<div className="buttons">
					{this.renderSubmitButton('Sign Up', 'btn__signin')}
				</div>
			</form>
		);
	}
}

export default SignUp;
