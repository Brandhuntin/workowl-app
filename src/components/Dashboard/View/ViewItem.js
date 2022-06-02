import React from "react";
import "./ViewItem.css";
import Send from "../../../media/send.svg";
import View from "../../../media/view.svg";

function ViewItem() {
	return (
		<div className='item-container'>
			<div className='item-header'>
				<div className='person-details'>
					<div className='item-person'>
						<p className='item-name'>Nikhil Parwani</p>
						<p className='item-details'>(Education , Startups finance,)</p>
					</div>
					<div className='item-profile-pic'></div>
				</div>

				<div className='item-posted-time'>
					<p>2 hours ago</p>
				</div>
			</div>
			<div className='item-content'>
				<p>
					Laborum deserunt consequat nisi non Lorem laboris qui est ea qui
					dolore sunt. Elit do ipsum pariatur irure esse occaecat proident.
					Irure cupidatat velit voluptate non ea do ad sint id. Cillum magna
					tempor elit ut adipisicing et ad consequat laborum ut voluptate tempor
					laborum. Consequat duis sint incididunt non anim. Aliqua ad magna
					aliqua nisi dolore tempor.
				</p>
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
