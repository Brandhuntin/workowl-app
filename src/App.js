import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Post from "./components/Post/Post";
import View from "./components/View/View";

function App() {
	return (
		<div className='App'>
			<Header />
			<SideBar />
			<Post />
			<View />
		</div>
	);
}

export default App;
