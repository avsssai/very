import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Glossary from "./Glossary";
import Quiz from "./quiz";
import Practice from "./practice";

const PageRouter = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/glossary'>
						<Glossary />
					</Route>
					<Route exact path='/practice'>
						<Practice />
					</Route>
					<Route exact path='/quiz'>
						<Quiz />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default PageRouter;
