import React from "react";
import { Link } from "react-router-dom";

import classes from "./LessonCard.module.css";

const LessonCard = (props) => {
	return (
		<Link to={`/lessons/:${props.id}`} className={classes.Lesson}>
			<img src={props.imageURL} className={classes.Image} />
			<div className={classes.Description}>
				<h1>{props.title}</h1>
				{props.author && <p>{props.author}</p>}
				<p>{props.level}</p>
			</div>
		</Link>
	);
};

export default LessonCard;
