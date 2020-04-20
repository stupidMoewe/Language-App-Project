import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Topbar.module.css';

const topbar = () =>(
    <div className={classes.Topbar}>
        <Link to='/' className={classes.Link} >Home</Link>
        <Link to='/lessons' className={classes.Link}>Lessons</Link>
        <Link to='/mypage' className={classes.Link}>My Page</Link>
    </div>
)

export default topbar;