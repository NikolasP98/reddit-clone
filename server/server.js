require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const db = require('./db');

const app = express();

app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

/*
----------------------------------------------------------------------------------------------------------------
1. USER DATA 
----------------------------------------------------------------------------------------------------------------
*/

// 1.1 GET USERS
app.get('/api/v1/user', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM mock_data');
		res.status(200).json({
			status: 'success',
			data: {
				users: results.rows,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: 'error',
			message: error.message,
		});
	}
});

// 1.2 GET SPECIFIC USER DATA
// REQUIRES AUTHENTICATION
app.get('/api/v1/user/:id', async (req, res) => {
	try {
		const results = await db.query(
			'SELECT * FROM mock_data WHERE id = $1',
			[req.params.id]
		);
		res.status(200).json({
			status: 'success',
			data: results.rows[0],
		});
	} catch (error) {
		res.status(500).json({
			status: 'error',
			message: error.message,
		});
	}
});

// 1.3 CREATE USER
app.post('/api/v1/user', async (req, res) => {
	console.log(req.body);
	const {
		first_name,
		last_name,
		email,
		gender,
		ip_address,
		country_of_origin,
	} = req.body;
	try {
		const results = await db.query(
			'INSERT INTO mock_data (first_name, last_name, email, gender, ip_address, country_of_origin) VALUES ($1, $2, $3, $4, $5, $6)',
			[
				first_name,
				last_name,
				email,
				gender,
				ip_address,
				country_of_origin,
			]
		);
		res.status(200).json({
			status: 'success',
			data: req.body,
		});
	} catch (error) {
		console.log(error);
	}
});

// 1.4 EDIT USER
app.put('/api/v1/user/:id', async (req, res) => {
	console.log(req.body);
	const {
		first_name,
		last_name,
		email,
		gender,
		ip_address,
		country_of_origin,
	} = req.body;
	try {
		const results = await db.query(
			'UPDATE mock_data SET first_name = $2, last_name = $3, email = $4, gender = $5, ip_address = $6, country_of_origin = $7 WHERE id = $1',
			[
				req.params.id,
				first_name,
				last_name,
				email,
				gender,
				ip_address,
				country_of_origin,
			]
		);
		res.status(200).json({
			status: 'success',
			data: req.body,
		});
	} catch (error) {
		console.log(error);
	}
});

/*
----------------------------------------------------------------------------------------------------------------
2. POST DATA
----------------------------------------------------------------------------------------------------------------
*/
app.get('/api/v1/posts', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			id: 1,
			title: 'First Post',
			body: 'This is the first post',
		},
	});
});
app.get('/api/v1/posts', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			id: 1,
			title: 'First Post',
			body: 'This is the first post',
		},
	});
});

/*
----------------------------------------------------------------------------------------------------------------
3. COMMENTS DATA
----------------------------------------------------------------------------------------------------------------
*/
app.post('/api/v1/posts', (req, res) => {
	console.log(req.body);
	res.status(200).status(201).json({
		id: 3,
		title: 'Third Post',
		body: 'This is the third post',
	});
});
