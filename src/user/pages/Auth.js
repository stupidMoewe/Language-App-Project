import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Button from '../../shared/components/UIElements/Button';
import Input from '../../shared/components/UIElements/Input';
import classes from './Auth.module.css';

class Auth extends Component {
	state = {
		controls: {
			username: {
				elementType: 'input',
				elementConfig: {
					type: 'username',
					placeholder: 'Username'
				},
				value: ''
				// validation: {  				// will be used by the validation function => to do
				// 	required: true,
				// 	isEmail: true
				// },
				// valid: false,
				// touch: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email'
				},
				value: ''
				// validation: {  				// will be used by the validation function => to do
				// 	required: true,
				// 	isEmail: true
				// },
				// valid: false,
				// touch: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: ''
				// validation: {
				// 	required: true,
				// 	minLength: 6
				// },
				// valid: false,
				// touch: false
			}
		},
		login: true
	};

	inputChangedHandler = (event, element) => {
		const changedElement = {
			...this.state.controls,
			[element.id]: { ...this.state.controls[element.id], value: event.target.value }
		};
		console.log(changedElement);
		this.setState({ controls: changedElement });
	};

	submitHandler = (event) => {
		event.preventDefault();
		console.log(this.state.login);
		if (this.state.login) {
			this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
		} else {
			this.props.onSign(
				this.state.controls.username.value,
				this.state.controls.email.value,
				this.state.controls.password.value
			);
		}
		if (this.props.history.goBack() == '/auth') {
			this.props.history.push('/lessons');
		}else{
			this.props.history.goBack();
		}
	};

	switchModeHandler = () => {
		console.log('clicked');
		this.setState({ login: !this.state.login });
		// let changedElement = {...this.state.controls}
		// for(let key in this.state.controls){
		// 	 changedElement = {
		// 		...this.state.controls,
		// 		[key]: { ...this.state.controls[key], value: "" }
		// 	};
		// 	this.setState({ controls: changedElement });
		// }
		// console.log('element',this.state.controls);
		// // console.log(this.state.controls)
		// //this.setState({controls.key: ''})
	};
	render() {
		const formElementArray = [];
		if (!this.state.login) {
			for (let key in this.state.controls) {
				formElementArray.push({ id: key, config: this.state.controls[key] });
			}
		} else {
			formElementArray.push({ id: 'email', config: this.state.controls.email });
			formElementArray.push({ id: 'password', config: this.state.controls.password });
		}
		const form = formElementArray.map((element) => {
			return (
				<Input
					key={element.key}
					placeholder={element.config.elementConfig.placeholder}
					changed={(event) => this.inputChangedHandler(event, element)}
				/>
			);
		});
		return (
			<div className={classes.Auth}>
				<form onSubmit={this.submitHandler}>
					<h2>Authentification</h2>
					{form}
					<Button text={this.state.login ? 'Login' : 'Create an account'} style={'Submit'} />
				</form>
				<Button
					text={this.state.login ? 'Switch to Signup' : 'Switch to Login'}
					onClick={this.switchModeHandler}
					style={'Submit'}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password)),
		onSign: (username, email, password) => dispatch(actions.sign(username, email, password))
	};
};

export default connect(null, mapDispatchToProps)(Auth);
