import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery"; //de la 5 a la 9 permite el funcionamiento de l drop
import Popper from "popper.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	let contador = store.favorites.length;
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<img
				width={100}
				height={80}
				src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7ozoKHg52hKzrpQmXpp9MUmlkQP3KXnW7w&usqp=CAU"
			/>

			<Link to="/">
				<span className="navbar-brand mb-0 h1" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites {""} {contador}
					</button>

					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						{contador == 0 ? (
							<div id="dropdown" className="d-flex ml-4">
								Empty
							</div>
						) : (
							store.favorites.map((item, index) => {
								return (
									<div key={index} id="dropdown" className="d-flex flex-row">
										<Link className="d-flex flex-grow-1" to={"/info/" + item}>
											<span className="dropdown-item">{item}</span>
										</Link>
										<i
											className="fas fa-trash-alt mt-2 mr-2"
											onClick={() => actions.deleteFav(item)}
										/>
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
