import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import './styles.scss';

const API_URL = import.meta.VITE_API_URL || 'http://localhost:5000/api/v1';
const SECRET_KEY = import.meta.VITE_SECRET;

const handleSubmit = async () => {
	try {
		// const { status, data } = await axios
		// 	.post(`${API_URL}/login`, { email, password })
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		const { status, data } = await axios
			.GET(`${API_URL}/login`)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	} catch (error) {
		console.log(error);
	}
};

const Login = () => {
	const initialVals = {
		email: '',
		password: '',
	};
	console.log('hello');
	console.log(API_URL);
	console.log(SECRET_KEY);
	return (
		<div className='login'>
			<h1>Login</h1>
			<Formik initialValues={initialVals} onSubmit={handleSubmit}>
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
					<button type='button' onClick={handleSubmit}>
						Submit Form
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Login;
