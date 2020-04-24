import React from "react";
import { useParams } from "react-router-dom";

import LessonPage from "../components/LessonPage";
import ALL from "../components/AllTheLessons";

const Lesson = () => {
	const id = useParams().id;
	const myLesson = ALL.filter((lesson) => `:${lesson.id}` == id);
	return <LessonPage title={myLesson[0].title} text={myLesson[0].text}/>;
};

export default Lesson;
