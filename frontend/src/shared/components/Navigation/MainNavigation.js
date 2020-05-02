import React, {useState} from "react";
import { Link } from 'react-router-dom';

import MainHeader from "./MainHeader";
import SideDrawer from './SideDrawer';
import NavLinks from "./NavLinks";
import classes from './MainNavigation.module.css'
import 'bootstrap';
import logo from '../../../img/logo.svg';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    return(
        <nav className={"navbar navbar-expand-sm ".concat(classes.MainNavigation)}>
            <img src={logo} style={{ height: "auto", width: 50 }} alt="website logo"/>
            <a className={"navbar-brand ml-1 ".concat(classes.plusSize)} href="#">LinguaHouse</a>
            <a id="placeHolderForJustifyingRight" className="ml-auto mr-1"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0 justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav text-right">
                    <li className="nav-item active ml-3 mr-3">
                        <a className="nav-link" href="/lessons">Lessons</a>
                    </li>
                    <li className="nav-item active ml-3 mr-3">
                        <a className="nav-link" href="#">Right Link 2</a>
                    </li>
                    <li className="nav-item active ml-3 mr-3">
                        <a className="nav-link" href="#">Right Link 2</a>
                    </li>
                </ul>
            </div>
        </nav>
)
};

export default MainNavigation;
