import React, { Component } from "react";

import LessonItem from "./LessonItem";
import ALL from './AllTheLessons';
import classes from "./LessonsList.module.css";

const LessonList = () => {
	
	const elements = ALL.map((e) => {
		return (
			<LessonItem
				title={e.title}
				key={e.id}
				id={e.id}
				level={e.level}
				imageURL={e.imageURL}
			/>
		);
	});
	return <div className={classes.LessonsList}>{elements}</div>;
};

export default LessonList;
