import React from 'react';

import ChapterCard from '../components/ChapterChoiceComponents/ChapterCard';
import Line from '../components/ChapterChoiceComponents/Line';
import classes from './ChaptersListPage.module.css';

const ALL_CHAPTERS = [ 'chap1', 'chap2' ];

const ChaptersListPage = (props) => {
	const chaptersList = ALL_CHAPTERS.map((chap, index) => <Line number={index + 1} title={chap} />);
	const chaptersListCards = ALL_CHAPTERS.map((chap) => <ChapterCard />);
	return (
		<div className={classes.ChaptersListPage}>
			<div className={classes.List}>{chaptersList}</div>
			<div className={classes.ChaptersCards}>{chaptersListCards}</div>
		</div>
	);
};

export default ChaptersListPage;
