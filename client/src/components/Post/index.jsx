import React, { useState } from 'react';
import './styles.scss';
import {
	FaRegArrowAltCircleUp as ArrowUp,
	FaRegArrowAltCircleDown as ArrowDown,
	FaRegCommentAlt as Comment,
	FaShareAlt as Share,
	FaSave as Save,
} from 'react-icons/fa';
import { HiOutlineDotsHorizontal as MoreOptions } from 'react-icons/hi';

const Post = ({ title, content }) => {
	const [likes, setLikes] = React.useState(0);
	const [dislikes, setDislikes] = React.useState(0);

	const [liked, setLiked] = React.useState(false);
	const [disliked, setDisliked] = React.useState(false);

	const handleLike = () => {
		if (liked) {
			setLikes(likes - 1);
		} else if (disliked) {
			setDislikes(dislikes - 1);
			setLikes(likes + 1);
			setDisliked(false);
		} else {
			setLikes(likes + 1);
		}

		setLiked(!liked);
	};

	const handleDislike = () => {
		if (disliked) {
			setDislikes(dislikes - 1);
		} else if (liked) {
			setLikes(likes - 1);
			setDislikes(dislikes + 1);
			setLiked(false);
		} else {
			setDislikes(dislikes + 1);
		}

		setDisliked(!disliked);
	};

	return (
		<div className='post'>
			<div className='like-count'>
				<ArrowUp
					className={`arrow-icon ${liked && 'icon-liked'}`}
					onClick={() => handleLike()}
				/>
				<small
					className={`count ${liked && 'icon-liked'} ${
						disliked && 'icon-disliked'
					}`}>
					{likes - dislikes}
				</small>
				<ArrowDown
					className={`arrow-icon ${disliked && 'icon-disliked'}`}
					onClick={() => handleDislike()}
				/>
			</div>
			<div className='main-section'>
				<div className='content'>
					<div className='post-metadata'>
						{/* <img src='xd' alt='subreddit image' /> */}
						<small className='subreddit'>{'r/subreddit'}</small>
						<small className='author'>
							Posted by{' '}
							<span className='username'>{'u/author'}</span>{' '}
							{'x hours'} ago
						</small>
					</div>
					<h3 className='post-title'>{title}</h3>
					<p>{content}</p>
				</div>
				<div className='stats'>
					<span className='comment'>
						<Comment />
						50 comments
					</span>
					<span className='comment'>
						<Share />
						Share
					</span>
					<span className='comment'>
						<Save />
						Save
					</span>
					<MoreOptions />
				</div>
			</div>
		</div>
	);
};

export default Post;
