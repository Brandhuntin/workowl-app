import React from "react";
// import Header from "./components/Dashboard/Header/Header";
// import SideBar from "./components/Dashboard/SideBar/SideBar";
// import Post from "./components/Dashboard/Post/Post";
// import View from "./components/Dashboard/View/View";
import Navbar from "./components/Landing/Navbar/Navbar";
import Main from "./components/Landing/Main/Main";
import HowItWorks from "./components/Landing/HowItWorks/HowItWorks";
import Rectangle from "./components/Landing/Reactangle/Rectangle";
import WhatWeOffer from "./components/Landing/WhatWeOffer/WhatWeOffer";
import WhoAreWe from "./components/Landing/WhoAreWe/WhoAreWe";
import Contact from "./components/Landing/Contact/Contact";

function App() {
	return (
		<div className='App'>
			{/* <Header />
			<SideBar />
			<Post />
			<View /> */}
			<Navbar />
			<Main />
			<Rectangle props='How it Works' background={true} />
			<HowItWorks />
			<Rectangle props='Built For ' span='You' background={false} />
			<WhatWeOffer />
			<Rectangle props='Who are ' span='we' background={false} />
			<WhoAreWe />
			<Contact />
		</div>
	);
}

export default App;
