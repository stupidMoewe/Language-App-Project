import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	let btnColor = 'rgb(106, 233, 255)';
	switch (props.style) {
		case 'Danger':
			btnColor = 'rgb(221, 49, 49)';
			break;
		case 'Submit':
			btnColor = 'rgb(36, 145, 247)';
			break;
	}
	return (
		<button className={classes.Button} style={{backgroundColor: btnColor, border: '1px solid '+btnColor}} onClick={props.onClick}>
			{props.text}
		</button>
	);
};

export default Button;
