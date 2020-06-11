import React from 'react';
import {Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import classes from './LessonExercicesPage.module.css';

//ihmport ALL from '../AllTheLessons';
//import ExercicesPage from '../components/ExercicesPage';

const LessonExercicesPage = () => {
	const lid = useParams().lid;
	// const myLesson = ALL.filter((lesson) => `:${lesson.id}`=== lid);
	// return <ExercicesPage id={lid}/>
	return (
		<div className={classes.LessonExercicesPage}>
			
			<h1>Exercices</h1>
			<h1>Exercices</h1>
			<h1>Exercices</h1>
			<h1>Exercices</h1>
		</div>
	);
};

export default LessonExercicesPage;
