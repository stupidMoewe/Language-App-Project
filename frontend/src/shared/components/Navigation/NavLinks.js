import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";
import 'bootstrap';

const NavLinks = () => (
    <ul className={"navbar-nav "}>
        <li className="nav-item ">
            <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/lessons">Lessons</a>
        </li>
        <li className="nav-item navbar-right">
            <a className="nav-link" href="/myaccount">My page</a>
        </li>
    </ul>
);

export default NavLinks;
