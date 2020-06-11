import React from 'react';

import classes from './Line.module.css';

const Line = (props) => {
	return (
		<div className={classes.Line}>
			<div className={classes.Number}>{props.number}</div>
			<div className={classes.Title}>{props.title}</div>
		</div>
	);
};

export default Line;
