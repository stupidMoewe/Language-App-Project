import React from 'react';
import { connect } from 'react-redux';

import VocLine from '../components/VocLine';
import Button from '../../shared/components/UIElements/Button';
import classes from './VocabularyPage.module.css';

const VocabularyPage = (props) => {
	let vocListDisplay = <h1>No vocabulary yet</h1>;
	console.log(props.vocList)
	if (props.vocList) {
		vocListDisplay = props.vocList.map((voc, index) => <VocLine lan1={voc.en} lan2={voc.fr}key={index} />);
		
	}
	return (
		<div className={classes.VocabularyPage}>
			<h1>Vocabulary</h1>
			<div>{vocListDisplay}</div>
			<div className={classes.Button}>
				<Button text={'Train Vocabulary'}  />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		vocList: state.vocReducer.voc
	};
};

export default connect(mapStateToProps)(VocabularyPage);
