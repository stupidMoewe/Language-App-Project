import * as actionTypes from './actionTypes';

import axios from 'axios';

export const authStart = (authData) => {
	return {
		type: actionTypes.AUTH_START
	};
};
export const authSuccess = (userId, username, token) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		userId: userId,
		username: username,
		token: token
	};
};
export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

// export const checkAuthTimeout = (expirationTime) => {
// 	console.log(expirationTime);
// 	return (dispatch) => {
// 		setTimeout(() => {
// 			console.log('i logged out!');
// 			dispatch(logout());
// 		}, expirationTime * 1000);
// 	};
// };

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationTime');
	localStorage.removeItem('username');
	localStorage.removeItem('userId');
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const auth = (email, password) => {
	return (dispatch) => {
		dispatch(authStart());
		const authData = { email, password };
		axios
			.post('http://localhost:5000/api/users/login', authData)
			.then((response) => {
				console.log('responseData', response.data);
				//const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
				localStorage.setItem('token', response.data.token);
				//localStorage.setItem('expirationDate', expirationDate);
				localStorage.setItem('userId', response.data.userId);
				localStorage.setItem('username', response.data.username);
				dispatch(authSuccess(response.data.userId, response.data.username, response.data.token));
				//dispatch(checkAuthTimeout(expirationDate));
			})
			.catch((err) => {
				console.log(err);
				dispatch(authFail(err));
			});
	};
};

export const sign = (username, email, password) => {
	return (dispatch) => {
		dispatch(authStart());
		const authData = { username, email, password };
		axios
			.post('http://localhost:5000/api/users/signup', authData)
			.then((response) => {
				console.log('responseData', response.data);
				//const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
				localStorage.setItem('token', response.data.token);
				//localStorage.setItem('expirationDate', expirationDate);
				localStorage.setItem('userId', response.data.userId);
				localStorage.setItem('username', response.data.username);
				dispatch(authSuccess(response.data.userId, response.data.username, response.data.token));
				//dispatch(checkAuthTimeout(expirationDate));
			})
			.catch((err) => {
				console.log(err);
				dispatch(authFail(err));
			});
	};
};

export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		if (!token) {
			return dispatch(logout());
		} else {
			const username = localStorage.getItem('username');
			const userId = localStorage.getItem('userId');
			dispatch(authSuccess(userId, username, token));
		}
	};
};
