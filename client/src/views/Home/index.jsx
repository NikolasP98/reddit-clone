import React from 'react';
import axios from 'axios';

const Home = () => {
	const { data } = axios
		.get('http://localhost:5000/api/v1/user')
		.then((res) => {
			console.log(res.data);
		});

	return (
		<div>
			<nav>navigator</nav>
			<h1>Home</h1>
			<p>All Posts</p>
		</div>
	);
};

export default Home;
