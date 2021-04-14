import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CharactersDetails } from "../component/charactersdetails";

export const CharactersCards = props => {
	const { store, actions } = useContext(Context);
	function favoritos(nombre) {
		let existe = store.favorites.find(el => el === nombre); //npm i --save bootstrap ingrse esto en la consola.

		if (existe != undefined) {
			return true;
		}
	}
	return (
		<>
			<div className="card" style={{ width: "18rem;" }}>
				<img
					className="card-img-top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7ozoKHg52hKzrpQmXpp9MUmlkQP3KXnW7w&usqp=CAU"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.hair}</p>
					<p className="card-text">{props.eyes} </p>

					<Link to={"/charactersdetails/" + props.id1}>
						<button className="btn btn-primary">Lern more</button>
					</Link>

					{store.favorites.length == 0 ? (
						<i
							className="far fa-heart fa-2x"
							onClick={() => {
								actions.addFavorites(props.name);
							}}
						/>
					) : favoritos(props.name) ? (
						<i
							className="fas fa-heart fa-2x"
							onClick={() => {
								actions.deleteFav(props.name);
							}}
						/>
					) : (
						<i
							className="far fa-heart fa-2x"
							onClick={() => {
								actions.addFavorites(props.name);
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
};

CharactersCards.propTypes = {
	name: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	id1: PropTypes.number
};
