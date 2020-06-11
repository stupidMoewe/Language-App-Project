import React from 'react';
import { Link, useParams } from 'react-router-dom';

import classes from './LessonHeader.module.css';

const LessonHeader = () => {
	const lid = useParams().lid;
	return (
		<div className={classes.Lesson}>
			<div className={classes.Header}>
				<div className={classes.Info}>Title of this book</div>
				{/* <div className={classes.Info}>Add this book to my favorites</div> */}
				<div className={classes.Info}>
					<Link to={`/lessons/${lid}/text`}>Text</Link>
					<Link to={`/lessons/${lid}/video`}>Lesson</Link>
					<Link to={`/lessons/${lid}/exercices`}>Exercices</Link>
				</div>
			</div>
		</div>
	);
};

export default LessonHeader;
