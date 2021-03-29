import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlanetsDetails } from "../component/planetsdetails";

export const PlanetsCards = props => {
	return (
		<div className="card " style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7ozoKHg52hKzrpQmXpp9MUmlkQP3KXnW7w&usqp=CAU"
				alt="Card image cap"
			/>
			<div className="card-body ">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.orbital}</p>
				<p className="card-text">{props.rotation} </p>
				<Link to={"/planetsdetails/" + props.id01}>
					<button className="btn btn-primary">Lern more</button>
				</Link>
			</div>
		</div>
	);
};

PlanetsCards.propTypes = {
	name: PropTypes.string,
	orbital: PropTypes.string,
	rotation: PropTypes.string,
	id01: PropTypes.number
};
