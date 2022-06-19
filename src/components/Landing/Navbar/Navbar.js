import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-home'>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Services</a>
					</li>
				</ul>
			</div>
			<div className='navbar-buttons'>
				<ul>
					<li>
						<a href='#'>About us</a>
					</li>
					<li>
						<button className='joinbutton'>Join</button>
					</li>
					<li>
						<button className='signinbutton'>Sign In</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
