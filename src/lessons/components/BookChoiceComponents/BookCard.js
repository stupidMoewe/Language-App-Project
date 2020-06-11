import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BookCard.module.css';

const BookCard = (props) => {
	return (
		<Link to={`/lessons/${props.id}/chapters`} className={classes.Lesson} id={props.id}>
			{props.imageURL ? (
				<img src={props.imageURL} className={classes.Image} />
			) : (
				<img src="https://picsum.photos/300/200" className={classes.Image} />
			)}
			<div className={classes.Description}>
				<h1>{props.title}</h1>
				{props.author && <p>{props.author}</p>}
				<p>{props.level}</p>
			</div>
		</Link>
	);
};

export default BookCard;
