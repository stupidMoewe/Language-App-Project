import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Element.module.css';

const element = (props) =>(
    <Link to='/lesson/:id' className={classes.Element}>
        <div className={classes.Image}>Image</div>
        <div className={classes.Description}>
            <h1>{props.title}</h1>
            <p>{props.level}</p>
        </div>
    </Link>
);

export default element;