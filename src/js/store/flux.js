const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			peoples: [{ name: "hh" }],

			planets: []
		},
		actions: {
			loadPeoples: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peoples: data.results }); //variable global
			},

			loadPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},

			addFavorites: variable => {
				let favoritos = getStore().favorites;
				favoritos = favoritos.concat(variable);
				setStore({ favorites: [...favoritos] });
			},

			deleteFav: variable => {
				let favoritos = getStore().favorites;
				let borrar = favoritos.find(el => el === variable);
				let index = favoritos.indexOf(borrar);
				favoritos.splice(index, 1);
				setStore({ favorites: [...favoritos] });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
