//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000) % 10;
	const three = Math.floor(counter / 100) % 10;
	const two = Math.floor(counter / 10) % 10;
	const one = Math.floor(counter / 1) % 10;
	counter++;

	//render your react application
	ReactDOM.render(
		<Home digOne={one} digTwo={two} digThree={three} digFour={four} />,
		document.querySelector("#app")
	);
}, 1000);
