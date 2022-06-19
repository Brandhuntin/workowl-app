import React from "react";
import "./HowItWorks.css";
import BrowseFreelancer from "../../../media/men t shit pose.svg";
import Chat from "../../../media/female metis t shirt pose  notebook-.svg";
import HelpAndSupport from "../../../media/female contact.svg";

function HowItWorks() {
	return (
		<div className='HowItWorks-container'>
			<div className='HowItWorks freelance'>
				<div className='HowItWorks-Blob freelance'>
					<p className='HowItWorks-Heading'>Freelancer</p>
					<p className='HowItWorks-Details'>
						Find Freelancer you can trust by browsing them, and viewing their
						profile and reviews.
					</p>
				</div>
				<div className='HowItWorks-image'>
					<img src={Chat} alt='freelance' />
				</div>
			</div>
			<div className='HowItWorks chat'>
				<div className='HowItWorks-Blob chat'>
					<p className='HowItWorks-Heading'>Chat</p>
					<p className='HowItWorks-Details'>
						Chat system helps you to get a touch with any Client or Freelancer.
					</p>
				</div>
				<div className='HowItWorks-image'>
					<img src={BrowseFreelancer} alt='chat' />
				</div>
			</div>
			<div className='HowItWorks help'>
				<div className='HowItWorks-Blob help'>
					<p className='HowItWorks-Heading'>
						Help & <br />
						Support
					</p>
					<p className='HowItWorks-Details HelpAndSupport-Details'>
						Our talented team of recruiters can also help you to find the best
						freelancer for the job and Manage the project
					</p>
				</div>
				<div className='HowItWorks-image help'>
					<img src={HelpAndSupport} alt='help' className='helpAndSupport' />
				</div>
			</div>
		</div>
	);
}

export default HowItWorks;
