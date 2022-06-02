import React from "react";
import "./Header.css";
import Bell from "../../../media/bell.svg";

function Header() {
	return (
		<header>
			<div class='stuff'>
				<div class='search'>
					<input type='search' placeholder='Search'></input>
				</div>
				<nav>
					<a href='#'>
						<img src={Bell} alt='notifications' />
					</a>
					<a href='#'>pic</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
