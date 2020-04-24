import React, {useState} from "react";

import MainHeader from "./MainHeader";
import SideDrawer from './SideDrawer';
import NavLinks from "./NavLinks";

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    return(
    <div className={classes.MainNavigation}>
        {/* SideDrawer for mobile version, will be seen later  */}
        {drawerIsOpen && <SideDrawer>
            <NavLinks />
        </SideDrawer>}
        {/* MainHeader for "normal" computer version */}
        <MainHeader>
            <button>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 >Language App</h1>
            <nav>
                <NavLinks />
            </nav>
        </MainHeader>
    </div>)
};

export default MainNavigation;
