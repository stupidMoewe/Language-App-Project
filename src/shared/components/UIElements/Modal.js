import React from 'react';
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';

import BackDrop from './BackDrop.js';
import classes from './Modal.module.css';

const Modal = (props) => {
	return (
		<React.Fragment>
			{props.show && <BackDrop onclick={props.onBackdropClicked}/>}
			<CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={0} classNames="modal">
				<ModalDisplay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

const ModalDisplay = (props) => {
	return (
		ReactDOM.createPortal(
		<div className={classes.ModalDisplay}>
			<div className={`${classes.ModalHeader} ${props.ModalHeaderStyle}`}>{props.title}</div>
			<div className={`${classes.ModalBody} ${props.ModalBodyStyle}`}>{props.body}</div>
			<div className={`${classes.ModalFooter} ${props.ModalFooterStyle}`}>{props.footer}</div>
		</div>, document.getElementById('modal-hook'))
	)
};

export default Modal;
