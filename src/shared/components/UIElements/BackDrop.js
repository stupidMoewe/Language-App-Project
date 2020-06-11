import React from 'react';
import ReactDOM from 'react-dom';
import classes from './BackDrop.module.css';

const BackDrop = (props) => {
	console.log('Backdrop');
	return ReactDOM.createPortal(<div className={classes.BackDrop} onClick={props.onclick}/>, document.getElementById('backdrop-hook'));
};

export default BackDrop;
