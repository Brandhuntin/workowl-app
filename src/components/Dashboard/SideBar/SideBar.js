import React, { useState } from "react";
import "./SideBar.css";
import hamburger from "../../media/hamburger.svg";
import users from "../../media/users.svg";
import chat from "../../media/message-square.svg";
import profile from "../../media/user.svg";
import Circle from "../../media/Circle.svg";
//container
function SideBar() {
	const [expand, setExpand] = useState(false);
	return (
		<div className='sidebar-body'>
			<div className={expand ? "container" : "expander"} id='navbar'>
				<nav className='nav'>
					<div>
						<div className='nav_brand'>
							<img
								src={hamburger}
								alt='menu'
								className='menu'
								onClick={() => {
									setExpand(!expand);
								}}
							/>
							<a href='#' className='nav_logo'>
								Dashboard
							</a>
						</div>
					</div>
					<ul>
						<li>
							<a href='#' className='nav_link'>
								<img src={users} alt='friends' className='logo' />
								<span className='nav_name'>Friends</span>
							</a>
						</li>
						<li>
							<a href='#' className='nav_link'>
								<img src={chat} alt='chat' className='logo' />
								<span className='nav_name'>Chats</span>
							</a>
						</li>
						<li>
							<a href='#' className='nav_link'>
								<img src={profile} alt='profile' className='logo' />
								<span className='nav_name'>Proflie</span>
							</a>
						</li>
						<li>
							{/* <img src={Circle} alt='cirles' className='circles' /> */}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default SideBar;
