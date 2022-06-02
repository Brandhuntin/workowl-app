import React from "react";
import Header from "./components/Dashboard/Header/Header";
import SideBar from "./components/Dashboard/SideBar/SideBar";
import Post from "./components/Dashboard/Post/Post";
import View from "./components/Dashboard/View/View";

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
