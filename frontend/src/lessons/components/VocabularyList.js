import React from 'react';

import Word from './Word';

const VocabularyList = props => {
    const words = props.vocabulary.map((word, index)=><Word word={word} key={index}/>);
    return (<>{words}</>)
}

export default VocabularyList;