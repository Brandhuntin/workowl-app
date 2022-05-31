import React from "react";
import "./Post.css";

function Post() {
	return (
		<div className='main'>
			<div className='post-heading'>
				<p>What's on your mind?</p>
			</div>
			<div className='post-body'>
				<textarea id='post' name='post' rows='10' cols='50' />
			</div>
			<div className='post-button'>
				<button>Submit</button>
			</div>
		</div>
	);
}

export default Post;
