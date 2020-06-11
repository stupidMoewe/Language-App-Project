import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import HomePage from './user/pages/HomePage';
import UserVocPage from './user/pages/VocabularyPage';
import UserPage from './user/pages/UserPage';

import './App.css';

const LessonsListPage = React.lazy(() => import('./lessons/pages/LessonsListPage'));
const LessonRouter = React.lazy(() => import('./lessons/LessonRouter'));
const AddLessonPage = React.lazy(() => import('./lessons/pages/AddLessonPage'));
const Auth = React.lazy(() => import('./user/pages/Auth'));
const ChaptersListPage = React.lazy(() => import('./lessons/pages/ChaptersListPage'));

class App extends Component {
	componentDidMount() {
		this.props.tryAutoSign();
	}
	render() {
		return (
			<Router basename="/">
				<MainNavigation />
				<Suspense fallback={<div>Loading</div>}>
					<main>
						<Switch>
							<Route path="/" exact component={HomePage} />

							<Route path="/lessons" exact component={LessonsListPage} />

							<Route path="/addlesson" exact component={AddLessonPage} />

							<Route path="/lessons/:lid/chapters" exact component={ChaptersListPage} />

							<Route path="/lessons/:lid/lesson" component={LessonRouter} />
							{/* <Route path="/lessons/:lid/exercices" exact={true} component={LessonExercicesPage} /> */}

							<Route path="/mypage" exact={true} component={UserPage} />

							<Route path="/vocabulary" exact={true} component={UserVocPage} />

							<Route path="/auth" exact={true} component={Auth} />

							{/* This need tp be kept in the last position */}
							{/* <AudioPlayerProvider>
								<Route path="/lessons/:lid" exact={true} component={LessonTextPage} />
							</AudioPlayerProvider> */}

							{/* <Redirect to="/lessons" /> */}
						</Switch>
					</main>
				</Suspense>
			</Router>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		tryAutoSign: () => dispatch(actions.authCheckState())
	};
};

export default connect(null, mapDispatchToProps)(App);
