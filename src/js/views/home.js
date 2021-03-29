import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Stars Wars</h1>
		<Link to="/Planets">
			<img
				width={400}
				height={300}
				src="https://i.etsystatic.com/5371193/r/il/aa4e44/1955994609/il_570xN.1955994609_oe7s.jpg "
				alt="People"
			/>
		</Link>

		<Link to="/character">
			<img
				width={400}
				height={300}
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vQIaXCwc9lmjLLrPQ9Dbp-sOgsHdwSItlQ&usqp=CAU "
				alt="People"
			/>
		</Link>
	</div>
);
