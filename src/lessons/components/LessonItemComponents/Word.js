import React from 'react';

import classes from './Word.module.css';

const Word = props => <div className={classes.Word}><a href={`https://dictionary.cambridge.org/dictionary/english/${props.word}`} target="_blank">{props.word.replace(/[^\w]/g, "").toLowerCase()}</a></div>

export default Word;

