import React from "react";
import "./Post.css";
import Chat from "../../media/quick_chat_.svg";

function Post() {
	return (
		<div className='main'>
			<div className='post-heading'>
				<p>What's on your mind?</p>
			</div>
			<div className='post-body'>
				<textarea
					id='post'
					name='post'
					rows='7'
					cols='45'
					placeholder='Post a deal, or share whatever you feel here'
				/>
				<img src={Chat} alt='chat' className='chat-image' />
			</div>
			<div className='post-button'>
				<button className='post-submit'>Submit</button>
			</div>
		</div>
	);
}

export default Post;
