import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import Lessons from "./lessons/pages/Lessons";
import Lesson from "./lessons/pages/Lesson";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Dummy from './shared/components/Dummy';
import "./App.css";
import UserPage from "./user/pages/UserPage";
import UserAccount from "./user/pages/UserAccount";

function App() {
	return (
		<Router>
			<MainNavigation />
			<main>
			<Switch>
				<Route path="/" exact={true}>
					<UserPage />
				</Route>
				<Route path="/lessons" exact={true}>
					<Lessons />
				</Route>
				<Route path="/lessons/:id" exact={true}>
					<Lesson />
				</Route>
				<Route path="/myaccount" exact={true}>
					<UserAccount />
				</Route>
				{/* <Redirect to="/" /> */}
			</Switch>
			</main>
		</Router>
	);
}

export default App;
