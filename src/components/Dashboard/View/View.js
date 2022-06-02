import React from "react";
import ViewItem from "./ViewItem";
import "./View.css";

function View() {
	const post = {
		name: "Nikhil Parwani",
		details: "(Startup, Finance)",
		time: "2 hours ago",
		content:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu",
	};

	return (
		<div className='view-container'>
			<ViewItem post={post} />
			<ViewItem post={post} />
			<ViewItem post={post} />
			<ViewItem post={post} />
			<ViewItem post={post} />
		</div>
	);
}

export default View;
