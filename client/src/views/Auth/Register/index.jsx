import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import './styles.scss';

// const handleSubmit = async (email, password) => {
// 	const { status, data } = await axios
// 		.post('/api/login', { email, password })
// 		.then((res) => {
// 			console.log(res);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

const Register = () => {
	const initialVals = {
		email: '',
		password: '',
	};

	return (
		<div className='register'>
			<h1>Register</h1>
			<Formik initialValues={initialVals} onSubmit={handleSubmit()}>
				<Form>
					<label htmlFor='email'>Email Address</label>
					<Field
						id='email'
						name='email'
						placeholder='Email Address'
					/>
					<label htmlFor='password'>Password</label>
					<Field
						id='password'
						name='password'
						placeholder='Your password'
					/>
					<button type='submit'>Submit Form</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Register;
