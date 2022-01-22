import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Post } from '@/components';
import './styles.scss';

import { CgImage as ImageIcon, CgLink as LinkIcon } from 'react-icons/cg';

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(async () => {
		const { data } = await axios
			.get('http://localhost:5000/api/v1/post')
			.then((res) => {
				return res.data;
			});

		setData(data);
		console.log(data);
	}, []);

	return (
		<>
			<Header />
			<h1>Home</h1>
			<p>All Posts</p>
			<div className='content'>
				<div className='create-post'>
					<span>avatar</span>
					<input type='text' placeholder='Create a post' />
					<ImageIcon className='create-icon' />
					<LinkIcon className='create-icon' />
				</div>
				{data.map((post) => (
					<Post key={post.id} {...post} />
				))}
			</div>
		</>
	);
};

export default Home;
