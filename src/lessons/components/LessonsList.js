import React, { Component } from "react";

import LessonItem from "./LessonItem";
import classes from "./LessonsList.module.css";

const LessonList = () => {
	const DUMMY_LESSONS = [
		{
			id: "l1",
			title: "Procrastination",
			level: "B1",
			imageURL: "https://picsum.photos/id/11/200/300",
			text: "Blablabla bla bla",
		},
		{
			id: "l2",
			title: "funny jobs",
			level: "B1",
			imageURL: "https://picsum.photos/id/12/200/300",
			text: "Blablabla bla bla",
		},
		{
			id: "l3",
			title: "Unususal Models",
			level: "B1",
			imageURL: "https://picsum.photos/id/13/200/300",
			text: "Blablabla bla bla",
		},
	];
	const elements = DUMMY_LESSONS.map((e) => {
		return (
			<LessonItem
				title={e.title}
				key={e.id}
				level={e.level}
				imageURL={e.imageURL}
			/>
		);
	});
	return <div className={classes.LessonsList}>{elements}</div>;
};

export default LessonList;
