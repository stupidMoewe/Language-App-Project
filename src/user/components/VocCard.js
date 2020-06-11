import React from 'react';
import classes from './VocCard.module.css';

const VocCard = (props) => {
	return (
		<div className={classes.Card}>
			<div>{props.element.en}</div>
			<div>{props.element.fr}</div>
		</div>
	);
};

export default VocCard;
