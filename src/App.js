import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Post from "./components/Post/Post";

function App() {
	return (
		<div className='App'>
			<Header />
			<SideBar />
			<Post />
		</div>
	);
}

export default App;
