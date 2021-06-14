import React, { Component } from 'react';
import Input from './input';

class Form extends Component {
	state = {
		data: {},
	};

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;

		this.setState({ data });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.doSubmit();
	};

	renderInput = (name, label, placeholder = '', required, type = 'text') => {
		const { data } = this.state;

		return (
			<Input
				required
				type={type}
				placeholder={placeholder}
				name={name}
				value={data[name]}
				label={label}
				onChange={this.handleChange}
			/>
		);
	};

	renderSubmitButton = (label, classes = '') => {
		return (
			<button className={`btn btn__primary ${classes}`}>
				{label}
			</button>
		);
	};
}

export default Form;
