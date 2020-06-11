import * as actionTypes from '../actions/actionTypes';

import { updatedObject } from '../utility';

const initialState = {
	voc: [
		{
			en: 'the',
			fr: 'le'
		},
		{
			en: 'name',
			fr: 'nom'
		},
		{
			en: 'cake',
			fr: 'gateau'
		},
		{
			en: 'field',
			fr: 'champ'
		}
	]
};

const vocAdd = (state, action) => {
	const newWord = {
		ru: action.wordRu,
		en: action.wordEn
	};
	return state.voc.push(newWord);
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.VOC_ADD:
			return vocAdd(state, action);
		// case actionTypes.VOC_DELETE_BY_ID:
		// 	return vocDelete(state, action);
		default:
			return state;
	}
};

export default reducer;
