import React, { Component } from "react";

import VocabularyList from "./VocabularyList";
import classes from "./LessonPage.module.css";

class LessonPage extends Component {
	// const [vocabulary, setVocabulary] = useState(['']);
	state = { 
		vocabulary: []
	};

	clickHandler = (e) => {
		const voc = this.state.vocabulary;
		let check = true;
		voc.forEach(word=> word===e.target.innerHTML?check= false:null);
		if(check){
			voc[voc.length] = e.target.innerHTML;
		this.setState({vocabulary: voc});
		}
		
	};
	render() {
		const text = this.props.text.toString().split(" ").map((e, index) => (
			<div className={classes.Word}>
				<p onClick={(e) => this.clickHandler(e)}>
					{e}
				</p>
				<p> </p>
			</div>
		));
		return (
			<div className={classes.LessonPage}>
				<header>
					<p>Progression</p>
				</header>
				<main>
					<h1>{this.props.title}</h1>
					{text}
				</main>
				<aside>
					<VocabularyList vocabulary={this.state.vocabulary} />
				</aside>
				<footer>
					<p>Play the audio?</p>
				</footer>
			</div>
		);
	}
}

export default LessonPage;
