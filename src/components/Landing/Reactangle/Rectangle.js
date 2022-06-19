import React, { useState } from "react";
import "./Reactangle.css";
import Line from "../../../media/Line.svg";
import Line2 from "../../../media/Line2.svg";

function Rectangle({ props, span, background }) {
	return (
		<>
			<img src={Line} alt='line' className='middleLine' />
			{background ? (
				<div className='middleRectangle'>{props}</div>
			) : (
				<div className='noBackgroundRectangle'>
					{props}
					<span className='voilet'>{span}</span>
				</div>
			)}
			<img src={Line2} alt='line' className='middleLine' />
		</>
	);
}

export default Rectangle;
