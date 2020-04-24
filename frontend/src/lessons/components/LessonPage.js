import React from "react";

import classes from "./LessonPage.module.css";

const LessonPage = (props) => (
	<div className={classes.LessonPage}>
		<main>
			<h1>{props.title}</h1>
			<p>{props.text}</p>
		</main>
        <aside>
            Vocabulary List
        </aside>
	</div>
);

export default LessonPage;
