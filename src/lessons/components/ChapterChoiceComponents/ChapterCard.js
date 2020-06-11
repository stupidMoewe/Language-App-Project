import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import classes from './ChapterCard.module.css';

const ChapterCard = () => {
	const history = useHistory();
	const lid = useParams().lid;
	// const accessChapterHandler = () => {
	// 	let path = `/lessons/${lid}/text`;
	// 	history.push(path);
	// };
	console.log(lid);
	return (
		<div className={classes.ChapterCard}>
			<Link to={`/lessons/${lid}/lesson/text`}>
				<div className={classes.ChapterNb}>ChapterNb</div>
				<div className={classes.Description}>Description</div>
				<div className={classes.GrammarPoints}>GrammarPoints</div>
				<div className={classes.KeyWords}>KeyWords</div>
			</Link>
		</div>
	);
};

export default ChapterCard;
