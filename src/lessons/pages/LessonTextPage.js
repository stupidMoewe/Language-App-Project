import React, { useState, useEffect, forceUpdate } from 'react';
import { useParams } from 'react-router-dom';
import { useAudioPlayer } from 'react-use-audio-player';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import VocabularyList from '../components/LessonItemComponents/VocabularyList';
import audio1 from '../../Audios/cool-musique.mp3';
import PlayBar from '../components/LessonItemComponents/PlayBar';
import classes from './LessonTextPage.module.css';

const LessonPage = (props) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ loadedText, setLoadedText ] = useState();
	const [ vocabulary, setVocabulary ] = useState([]);
	const [ error, setError ] = useState(null);

	const lid = useParams().lid;

	const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
		src: audio1,
		format: 'mp3',
		autoplay: false
	});

	useEffect(() => {
		const sendRequest = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/lessons/${lid}`);

				const responseData = await response.json();

				if (!response.ok) {
					throw new Error(responseData.message);
				}
				console.log(responseData.lesson.text);
				setLoadedText(responseData.lesson);
			} catch (err) {
				setError(err.message);
			}
			setIsLoading(false);
		};
		sendRequest();
		return function sendVocToStore() {};
	}, []);

	const clickHandler = (e) => {
		const voc = [ ...vocabulary ];
		let check = true;
		voc.forEach((word) => (word === e.target.innerHTML ? (check = false) : null));
		if (check) {
			voc[voc.length] = e.target.innerHTML;
			setVocabulary(voc);
		}
	};

	let text = <h1>No text loaded</h1>;
	if (loadedText) {
		text = loadedText.text.split(' ').map((e, index) => (
			<div className={classes.Word}>
				<p
					onClick={(e) => clickHandler(e)}
					style={e.slice(0, 1) === '#' ? { backgroundColor: 'yellow' } : null}
				>
					{e.slice(0, 1) === '#' ? e.slice(1, e.length) : e}
				</p>
				<p> </p>
			</div>
		));
	}
	return (
		<div className={classes.LessonPage}>
			<main>
				<div className={classes.Text}>
					{loadedText && <h2>{loadedText.title}</h2>}
					{text}
				</div>
				<div className={classes.AsideText}>
					<div className={classes.VocabularyList}>
						<VocabularyList vocabulary={vocabulary} />
					</div>
					{/* <div className={classes.ExercicesLink}>
						<Link to={`/lessons/${lid}/exercices`}>Exercices</Link>
					</div> */}
				</div>
			</main>
			<footer>
				<div>
					{!ready && !loading && <div>No audio to play</div>}
					<PlayBar />
					<div className={classes.Footer}>
						<button className={classes.ButtonAudio} onClick={togglePlayPause}>
							{playing ? 'Pause' : 'Play'}
						</button>
						<Link to={`/lessons/${lid}/lesson/video`}>Lesson</Link>
					</div>
				</div>
			</footer>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addVoc: (vocabulary) => dispatch(actions.addVoc(vocabulary))
	};
};

export default connect(null, mapDispatchToProps)(LessonPage);
