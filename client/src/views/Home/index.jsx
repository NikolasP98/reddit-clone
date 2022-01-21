import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '@/components';

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(async () => {
		const { data } = await axios
			.get('http://localhost:5000/api/v1/user')
			.then((res) => {
				return res.data;
			});

		setData(data);
		console.log(data);
	}, []);

	return (
		<div>
			<Header />
			<h1>Home</h1>
			<p>All Posts</p>
		</div>
	);
};

export default Home;
