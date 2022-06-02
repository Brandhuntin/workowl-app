import React from "react";
import ViewItem from "./ViewItem";
import "./View.css";

function View() {
	return (
		<div className='view-container'>
			<ViewItem />
			<ViewItem />
			<ViewItem />
			<ViewItem />
			<ViewItem />
		</div>
	);
}

export default View;
