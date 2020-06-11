import React from 'react';

import classes from './VocLine.module.css';

const VocLine = (props) => {
	return (
		<div className={classes.VocLine}>
			<div className={classes.Lan1}>{props.lan1}</div>
			<div className={classes.Lan2}>{props.lan2}</div>
		</div>
	);
};

export default VocLine;
