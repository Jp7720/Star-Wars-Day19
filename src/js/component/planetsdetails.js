import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetails = () => {
	const { store, actions } = useContext(Context);
	const { params } = useParams();
	return (
		<>
			{store.planets.map((item, index) => {
				if (params == index) {
					console.log("entro al if ....");
					return <li key={index}>{item.name} </li>;
				}
			})}
			;
			<div className="bg-light p-5 rounded-lg m-3">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>

				<Link to="/character">
					<button className="btn btn-primary">go planets</button>
				</Link>
			</div>
		</>
	);
};
