import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { AudioPlayerProvider } from 'react-use-audio-player';

import LessonHeader from './components/LessonHeader/LessonHeader';
import LessonTextPage from './pages/LessonTextPage';
import LessonVideoPage from './pages/LessonVideoPage';
import LessonExercicesPage from './pages/LessonExercicesPage';

class LessonRouter extends Component {
	render() {
		return (
			<div style={{ marginTop: '10rem' }}>
				<LessonHeader />
				<Switch>
					<Route path="/lessons/:lid/lesson/video" component={LessonVideoPage} />
					<Route path="/lessons/:lid/lesson/exercices" component={LessonExercicesPage} />
					<AudioPlayerProvider>
						<Route path="/lessons/:lid/lesson/text" component={LessonTextPage} />
					</AudioPlayerProvider>
				</Switch>
			</div>
		);
	}
}

export default LessonRouter;
