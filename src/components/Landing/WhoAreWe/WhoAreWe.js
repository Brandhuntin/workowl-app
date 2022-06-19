import React from "react";
import "./WhoAreWe.css";
import WhatWeOffer from "../../../media/waw_Illustration 1.svg";

function WhoAreWe() {
	return (
		<div className='WhoAreWe-container'>
			<div className='WhoAreWe-text'>
				We're a bunch of young people trying to solve as many problems as
				possible for freelancers and Client
				<br />
				<span className='WhoAreWe-By'>BY</span>
				<br />
				giving them an optimum, all-in-one platform for their overall growth.
			</div>
			<div className='WhoAreWe-logo'>
				<img src={WhatWeOffer} alt='WhatWeOffer' className='WhoAreWe-img' />
			</div>
		</div>
	);
}

export default WhoAreWe;
