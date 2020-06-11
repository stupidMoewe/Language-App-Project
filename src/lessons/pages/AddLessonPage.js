import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './AddLessonPage.module.css';

const AddLessonPage = props => {
	// let [title, topic, level, text, author, creator, image, vocList, grammar];

	const handleClick = async (e) => {
		e.preventDefault();
		const data = new FormData(e.target);

		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/lessons', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: document.getElementById('title').value,
					topic: document.getElementById('topic').value,
					level: document.getElementById('level').value,
					text: document.getElementById('text').value,
					author: document.getElementById('author').value,
					creator: document.getElementById('creator').value,
					imageURL: document.getElementById('imageURL').value,
					vocList: document.getElementById('vocList').value,
					grammar: document.getElementById('grammar').value
				})
			});
			//const responseData = await response.json();
			console.log(response);
		} catch (err) {
			console.log(err);
		}
		props.history.push('/lessons');
	};

	return (
		<div className={classes.AddLesson}>
			<h1>Add a lesson to the DB</h1>
			{/* // title, topic, level, text, author, creator, image, vocList, grammar */}
			<form onSubmit={handleClick} noValidate className={classes.Form}>
				<label>
					title (required)
					<input id="title" type="text" name="title" required />
				</label>
				<label>
					topic (required)
					<input id="topic" type="text" name="topic" required />
				</label>
				<label>
					level (required)
					<input id="level" type="text" name="level" required />
				</label>
				<label>
					text (required)
					<input id="text" type="text" name="text" required />
				</label>
				<label>
					author
					<input id="author" type="text" name="author" />
				</label>
				<label>
					creator
					<input id="creator" type="text" name="creator" />
				</label>
				<label>
					imageURL
					<input id="imageURL" type="text" name="imageURL" />
				</label>
				<label>
					vocList
					<input id="vocList" type="text" name="vocList" />
				</label>
				<label>
					grammar
					<input id="grammar" type="text" name="grammar" />
				</label>
				<input type="submit" value="Envoyer" />
			</form>
		</div>
	);
};

export default withRouter(AddLessonPage);
