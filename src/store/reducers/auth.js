import * as actionTypes from '../actions/actionTypes';

import { updatedObject } from '../utility';

const initialState = {
	userId: null,
	username: null,
	token: null,
	error: null,
	loading: false
};

const authStart = (state, action) => {
	return updatedObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
	return updatedObject(state, {
		userId: action.userId,
		username: action.username,
		token: action.token,
		error: null,
		loading: false
	});
};

const authFail = (state, action) => {
	return updatedObject(state, {
		error: action.error,
		loading: false
	});
};

const logout = (state, action) => {
	return updatedObject(state, {
		userId: null,
		username: null,
		token: null,
		error: null
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_LOGOUT:
			return logout(state, action);
		default:
			return state;
	}
};

export default reducer;
