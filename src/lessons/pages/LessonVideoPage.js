import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import classes from './LessonVideoPage.module.css';

const LessonVideoPage = () => {
    const lid = useParams().lid;

	return (
		<div className={classes.LessonVideoPage}>
			<h1>Video</h1>
			<h1>Video</h1>
			<h1>Video</h1>
			<h1>Video</h1>
		</div>
	);
};

export default LessonVideoPage;
