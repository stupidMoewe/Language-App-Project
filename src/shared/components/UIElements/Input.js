import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
	return (
		<div className={classes.InputFrame} key={props.key}>
			<input className={classes.Input} placeholder={props.placeholder} onChange={props.changed}/>
		</div>
	);
};

export default Input;
