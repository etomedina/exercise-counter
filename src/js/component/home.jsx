import React from "react";
import propTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

function Home(props) {
	return (
		<>
			<div className="MainCounter">
				<div className="Imagen">
					<i className="far fa-clock"></i>
				</div>
				<div className="four">{props.digFour}</div>
				<div className="thre">{props.digThree}</div>
				<div className="two">{props.digTwo}</div>
				<div className="one">{props.digOne}</div>
			</div>
		</>
	);
}

Home.propTypes = {
	digFour: propTypes.number,
	digThree: propTypes.number,
	digTwo: propTypes.number,
	digOne: propTypes.number,
};

export default Home;
