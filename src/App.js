import React from "react";
import "./App.css";

import Signup from "./components/Signup/Signup";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	HashRouter,
} from "react-router-dom";

function App() {
	return (
		<HashRouter basename="/">
			<div className="App">
				<Switch>
					<Route path="/" exact component={Signup} />
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
