import React from 'react';

import classes from './MainHeader.module.css';
import 'bootstrap';

const MainHeader = props => {
    return <header className="navbar">{props.children}</header>
}

export default MainHeader;