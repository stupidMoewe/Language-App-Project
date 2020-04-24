import React from "react";

import classes from './LessonCard.module.css';

const LessonCard = (props) => {
	return <div className={classes.LessonCard}>{props.children}</div>;
};

export default LessonCard;
