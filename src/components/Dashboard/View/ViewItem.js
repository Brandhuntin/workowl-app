import React from "react";
import "./ViewItem.css";
import Send from "../../../media/send.svg";
import View from "../../../media/view.svg";

function ViewItem({ post }) {
	return (
		<div className='item-container'>
			<div className='item-header'>
				<div className='person-details'>
					<div className='item-person'>
						<p className='item-name'>{post.name}</p>
						<p className='item-details'>{post.details}</p>
					</div>
					<div className='item-profile-pic'></div>
				</div>

				<div className='item-posted-time'>
					<p>{post.time}</p>
				</div>
			</div>
			<div className='item-content'>
				<p>{post.content}</p>
			</div>
			<div className='item-buttons'>
				<button className='send-message'>
					<img src={Send} alt='item-icons' className='item-icon' /> send message
				</button>
				<button className='view-profile'>
					<img src={View} alt='item-icons' className='item-icon' /> view profile
				</button>
			</div>
		</div>
	);
}

export default ViewItem;
