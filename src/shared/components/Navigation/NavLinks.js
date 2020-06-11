import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Modal from '../UIElements/Modal';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
	// const [ isModalLoginOpened, setIsModalLoginOpened ] = useState(false);
	// const [ isModalSignupOpened, setIsModalSignupOpened ] = useState(false);
	// const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	// const [ userLogged, setUserLogged ] = useState();
	// const [ errMessage, setErrMessage ] = useState('');

	// const loginModalClickHandler = () => {
	// 	setIsModalLoginOpened(true);
	// 	setIsModalSignupOpened(false);
	// };

	// const signupModalClickHandler = () => {
	// 	setIsModalSignupOpened(true);
	// 	setIsModalLoginOpened(false);
	// };

	// const onBackdropClicked = () => {
	// 	setIsModalLoginOpened(false);
	// 	setIsModalSignupOpened(false);
	// 	setErrMessage('');
	// };

	// const loginSubmitHandler = async () => {
	// 	const email = document.getElementById('modal-login-email').value;
	// 	const password = document.getElementById('modal-login-password').value;
	// 	console.log(email, password);
	// 	try {
	// 		setErrMessage('');
	// 		const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/users/login', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({
	// 				email: email,
	// 				password: password
	// 			})
	// 		});
	// 		const responseData = await response.json();
	// 		if (responseData.username) {
	// 			setIsModalLoginOpened(false);
	// 			setIsLoggedIn(true);
	// 			// setUserLogged(username);
	// 			setUserLogged(responseData.username);
	// 		} else {
	// 			setErrMessage('Invalid input');
	// 		}
	// 		console.log('responseData');
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// const logoutSubmitHandler = () => {
	// 	//setIsLoggedIn(false);
	// 	//setIsModalLoginOpened(false);
	// 	setIsModalSignupOpened(false);
	// };

	// const bodyModalSignup = (
	// 	<div className={classes.ModalForm}>
	// 		<p>Enter your username</p>
	// 		<input
	// 			className={classes.ModalEmailInput}
	// 			id="modal-login-username"
	// 			type="text"
	// 			placeholder="Username"
	// 			required
	// 		/>
	// 		<p>Enter your email</p>
	// 		<input
	// 			className={classes.ModalEmailInput}
	// 			id="modal-login-email"
	// 			type="email"
	// 			placeholder="Email"
	// 			required
	// 		/>
	// 		<p>Enter your password</p>
	// 		<input
	// 			className={classes.ModalPasswordInput}
	// 			id="modal-login-password"
	// 			type="password"
	// 			placeholder="Password"
	// 			required
	// 		/>
	// 		{errMessage}
	// 		<button className={classes.ModalEnterButton}>Login</button>
	// 	</div>
	// );

	// const bodyModalLogin = (
	// 	<div className={classes.ModalForm}>
	// 		<p>Enter your email</p>
	// 		<input
	// 			className={classes.ModalEmailInput}
	// 			id="modal-login-email"
	// 			type="email"
	// 			placeholder="Email"
	// 			required
	// 		/>
	// 		<p>Enter your password</p>
	// 		<input
	// 			className={classes.ModalPasswordInput}
	// 			id="modal-login-password"
	// 			type="password"
	// 			placeholder="Password"
	// 			required
	// 		/>
	// 		{errMessage}
	// 		<button className={classes.ModalEnterButton} onClick={loginSubmitHandler}>
	// 			Login
	// 		</button>
	// 	</div>
	// );
	return (
		<ul className={classes.NavLinks}>
			{/* <li>
				<NavLink to="/">Home</NavLink>
			</li> */}
			<li>
				<NavLink to="/lessons">Lessons</NavLink>
			</li>
			<li>
				<NavLink to="/vocabulary">Vocabulary</NavLink>
			</li>
			<li>
				<NavLink to="/addlesson">Add lesson</NavLink>
			</li>
			<li>{console.log(props.username)}
				{props.username ? (
					<React.Fragment>
						<NavLink to="/mypage">{props.username}</NavLink>
						<a onClick={()=>props.logout()}>Logout</a>
					</React.Fragment>
				) : (
					<NavLink to="/auth">Authenticate</NavLink>
					// <React.Fragment>
					// 	<a onClick={loginModalClickHandler}>Login</a>
					// 	<Modal
					// 		show={isModalLoginOpened}
					// 		onBackdropClicked={onBackdropClicked}
					// 		title="Connection"
					// 		body={bodyModalLogin}
					// 	/>
					// 	<a onClick={signupModalClickHandler}>Register</a>
					// 	<Modal
					// 		show={isModalSignupOpened}
					// 		onBackdropClicked={onBackdropClicked}
					// 		title="Register"
					// 		body={bodyModalSignup}
					// 	/>
					// </React.Fragment>
				)}
			</li>
		</ul>
	);
};

const mapStateToProps = (state) => {
	console.log(state)
	return {
		username: state.authReducer.username
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(actions.logout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
