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
		const results = await db.query('SELECT * FROM person');
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
		const results = await db.query('SELECT * FROM person WHERE id = $1', [
			req.params.id,
		]);
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
			'INSERT INTO mock_data (username, password, email, dob) VALUES ($1, $2, $3, $4)',
			[username, password, email, dob]
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
	const { username, password, email, dob } = req.body;
	try {
		const results = await db.query(
			'UPDATE mock_data SET first_name = $2, last_name = $3, email = $4, gender = $5, ip_address = $6, country_of_origin = $7 WHERE id = $1',
			[req.params.id, username, password, email, dob]
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

// 2.1 GET POSTS
app.get('/api/v1/post', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM post');
		res.status(200).json({
			status: 'success',
			data: results.rows,
		});
	} catch (error) {
		console.log(error);
	}
});

// 2.2 GET SPECIFIC POST
app.get('/api/v1/post/:id', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM post WHERE id = $1', [
			req.params.id,
		]);
		res.status(200).json({
			status: 'success',
			data: results.rows[0],
		});
	} catch (error) {
		console.log(error);
	}
});

// 2.3 CREATE POST
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
