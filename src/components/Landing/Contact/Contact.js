import React from "react";
import "./Contact.css";

function Contact() {
	return (
		<div className='ContactUs-container'>
			<div className='ContactUs-Heading'>
				Work<span className='ContactUs-voilet'>Owl</span>
			</div>
			<div className='ContactUs-Links'>
				<div className='ContactUs-Emails'>
					<p className='EmailUs-Heading'>
						<strong>Email us</strong>
					</p>
					<p>Nikhilparwani205@gmail.com</p>
					<p>workowlbussiness@gmail.com</p>
					<p>aritrodhali@gmail.com</p>
				</div>
				<div className='ContactUs-Socials'></div>
			</div>
			<hr />
			<div className='ContactUs-PrivacyPolices'>Privacy policy</div>
		</div>
	);
}

export default Contact;
