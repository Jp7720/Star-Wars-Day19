import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CharactersCards } from "../component/characterscards";

export const Character = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);

	return (
		<>
			<div className="container text-center mt-5">
				<div>
					<h1>Character</h1>

					<Link to="/">
						<button className="btn btn-primary">ir a Home</button>
					</Link>

					<div className="card-deck">
						{store.peoples.map((item, index) => {
							return (
								<div key={index}>
									<CharactersCards
										name={"Name:" + item.name}
										hair={"Hair Color : " + item.hair_color}
										eyes={"Eye-Color : " + item.eye_color}
										id1={index}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
