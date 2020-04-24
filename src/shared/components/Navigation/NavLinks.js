import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = () => (
	<ul className={classes.NavLinks}>
		<li>
			<NavLink to="/">
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to="/lessons">
				Lessons
			</NavLink>
		</li>
		<li>
			<NavLink to="/myaccount">
				My Page
			</NavLink>
		</li>
	</ul>
);

export default NavLinks;
