import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import BookCard from '../components/BookChoiceComponents/BookCard';
import classes from './LessonsListPage.module.css';

const LessonsListPage = (props) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState();
	const [ loadedLessons, setLoadedLessons ] = useState();
	const [ levelChoosen, setLevelChoosen ] = useState('ALL');

	useEffect(() => {
		const sendRequest = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/lessons');

				const responseData = await response.json();
				if (!response.ok) {
					throw new Error(responseData.message);
				}

				const myLessons = responseData.lessons.map((lesson) => {
					return <BookCard title={lesson.title} key={lesson.id} id={lesson.id} level={lesson.level} />;
				});
			
				setLoadedLessons(myLessons);
			} catch (err) {
				setError(err.message);
			}
			setIsLoading(false);
		};
		sendRequest();
	}, []);

	const buttonLevelClickedHandler = (level) => {
		for (var i = 0; i < 6; i++) {
			if (i == level) {
				document.getElementById(i).style.backgroundColor = 'lightgray';
				document.getElementById(i).style.color = 'white';
			} else {
				document.getElementById(i).style.backgroundColor = 'rgb(247, 247, 247)';
				document.getElementById(i).style.color = 'black';
			}
		}
		switch (level) {
			case 0:
				setLevelChoosen('ALL');
				break;
			case 1:
				setLevelChoosen('A1');
				break;
			case 2:
				setLevelChoosen('A2');
				break;
			case 3:
				setLevelChoosen('B1');
				break;
			case 4:
				setLevelChoosen('B2');
				break;
			case 5:
				setLevelChoosen('C1');
				break;
		}
	};

	return (
		<div className={classes.LessonsListPage}>
			<div className={classes.LessonsSettings}>
				<div className={classes.LevelTitle}>Level</div>
				<div className={classes.ButtonsLevel}>
					<button onClick={() => buttonLevelClickedHandler(0)} id="0">
						ALL
					</button>
					<button onClick={() => buttonLevelClickedHandler(1)} id="1">
						A1
					</button>
					<button onClick={() => buttonLevelClickedHandler(2)} id="2">
						A2
					</button>
					<button onClick={() => buttonLevelClickedHandler(3)} id="3">
						B1
					</button>
					<button onClick={() => buttonLevelClickedHandler(4)} id="4">
						B2
					</button>
					<button onClick={() => buttonLevelClickedHandler(5)} id="5">
						C1
					</button>
				</div>
			</div>
			{!isLoading && loadedLessons && <div className={classes.LoadedLessons}>{loadedLessons}</div>}
			<h3 style={{ textAlign: 'center', padding: '10rem' }}>To access more content, please register</h3>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { isLogged: state.isLogged };
};

export default connect(mapStateToProps)(LessonsListPage);
