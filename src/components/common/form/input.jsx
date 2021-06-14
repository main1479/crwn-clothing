import React from 'react';

import './input.scss';

const Input = ({ name, label, ...rest }) => {
	return (
		<div className="form__group">
			<input {...rest} id={name} name={name} className="form__input" />
			<label htmlFor={name} className={{ ...rest}.value ? 'form__label shrink' : 'form__label'}>
				{label}
			</label>
		</div>
	);
};

export default Input;
