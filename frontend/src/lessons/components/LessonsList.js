import React, { Component } from "react";

import LessonCard from "./LessonCard";
import ALL from './AllTheLessons';
import classes from "./LessonsList.module.css";

const LessonList = () => {
	
	const lessons = ALL.map((lesson) => {
		return (
			<LessonCard
				title={lesson.title}
				author={lesson.author}
				key={lesson.id}
				id={lesson.id}
				level={lesson.level}
				imageURL={lesson.imageURL}
			/>
		);
	});
	return <div className={classes.LessonsList}>{lessons}</div>;
};

export default LessonList;
