import React from 'react';
import { toast } from 'react-toastify';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Form from './../common/form/form';

class SignUp extends Form {
	state = {
		data: {
			displayName: '',
			emailId: '',
			newPassword: '',
			confirmPassword: '',
		},
	};
	async doSubmit() {
		const { displayName, emailId: email, newPassword: password, confirmPassword } = this.state.data;
		if (password !== confirmPassword) return toast.error(`Password not match!`);

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				data: {
					displayName: '',
					emailId: '',
					newPassword: '',
					confirmPassword: '',
				},
			});
		} catch (error) {
			toast.error(error.message);
		}
	}

	render() {
		return (
			<form className="form form__signin" onSubmit={this.handleSubmit}>
				<h2 className="heading">I do not have an account</h2>
				<p className="heading--sub">Sign up with your email and password</p>

				{this.renderInput('displayName', 'Name', '', true)}
				{this.renderInput('emailId', 'Email', '', true, 'email')}
				{this.renderInput('newPassword', 'Password', '', true, 'password')}
				{this.renderInput('confirmPassword', 'Confirm Password', '', true, 'password')}
				<div className="buttons">{this.renderSubmitButton('Sign Up', 'btn__signin')}</div>
			</form>
		);
	}
}

export default SignUp;
