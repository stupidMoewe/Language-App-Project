import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LessonItem.module.css';

const LessonItem = (props) =>{
    return(
    <Link to={`/lessons/:${props.id}`} className={classes.Lesson}>
        <img src={props.imageURL} className={classes.Image}/>
        <div className={classes.Description}>
            <h1>{props.title}</h1>
            <p>{props.level}</p>
        </div>
    </Link>)
};

export default LessonItem;