import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { PlanetsCards } from "../component/planetscards";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.planets);

	return (
		<div className="container text-center mt-5">
			<h1>Planets</h1>
			<div className="scrolling-wrapper card-deck ">
				{store.planets.map((item, index) => {
					return (
						<div key={index}>
							<PlanetsCards
								name={item.name}
								orbital={item.orbital_period}
								rotation={item.rotation_period}
								id01={index}
							/>
						</div>
					);
				})}
			</div>

			<Link to="/">
				<button className="btn btn-primary">Go a Home</button>
			</Link>
		</div>
	);
};
