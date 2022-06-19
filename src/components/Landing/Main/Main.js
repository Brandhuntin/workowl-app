import React from "react";
import "./Main.css";
import fullOwl from "../../../media/fullowl.svg";

function Landing() {
	return (
		<div className='landing-main'>
			<div className='landing-text'>
				We are India's most active Freelancers Communtity with the most trusted
				Brands
				<br />
				<div className='landing-join'>Join Us</div>
				<div className='landing-buttons'>
					<button className='freelancer'>Freelancer</button>
					<button className='hire-talent'>Hire Talent</button>
				</div>
			</div>
			<div className='landing-logo'>
				<img src={fullOwl} alt='mainLogo' className='main-logo' />
			</div>
		</div>
	);
}

export default Landing;
