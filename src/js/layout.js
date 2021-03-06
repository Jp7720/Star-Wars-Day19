import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //permite manejar distintas vistas
import ScrollToTop from "./component/scrollToTop";

import { Planets } from "./views/Planets";
import { PlanetsDetails } from "./component/planetsdetails";

import { Character } from "./views/character";
import { CharactersDetails } from "./component/charactersdetails";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planetsdetails/:id01/">
							<PlanetsDetails />
						</Route>

						<Route exact path="/character/">
							<Character />
						</Route>
						<Route exact path="/charactersdetails/:id1/">
							<CharactersDetails />
						</Route>

						<Route exact path="/demo">
							<Demo />
						</Route>

						<Route exact path="/single/:theid">
							<Single />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
