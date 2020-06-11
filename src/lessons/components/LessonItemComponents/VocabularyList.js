import React from 'react';

import Word from './Word';

const VocabularyList = (props) => {
	let words = <h1>No word</h1>;
	console.log('props.vocabulary', props.vocabulary)
	if (props.vocabulary) {
		words = props.vocabulary.map((word, index) => <Word word={word} key={index} />);
	}
	return <React.Fragment>{words}</React.Fragment>;
};

export default VocabularyList;
