import React from "react";
import { Link } from "react-router-dom";

import classes from "./LessonCard.module.css";
import img from '../../img/img-1.jpg';

const LessonCard = (props) => {
	return (
		// <Link to={`/lessons/:${props.id}`} className={classes.Lesson}>
		// 	<img src={props.imageURL} className={classes.Image} />
		// 	<div className={classes.Description}>
		// 		<h1>{props.title}</h1>
		// 		{props.author && <p>{props.author}</p>}
		// 		<p>{props.level}</p>
		// 	</div>
		// </Link>

		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<div className="card mb-3 box-shadow">
						<div className="d-flex justify-content-between align-items-center">
						<img  src={img} className={"card-img-top ".concat(classes.Image)}/>
						</div>
						<div className="card-body">
							<p className="card-text">I'm working on it.</p>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card mb-3 box-shadow">
						<div className="d-flex justify-content-between align-items-center">
							<img  src={img} className={"card-img-top ".concat(classes.Image)}/>
						</div>
						<div className="card-body">
							<p className="card-text">I'm working on it.</p>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card mb-3 box-shadow">
						<div className="d-flex justify-content-between align-items-center">
							<img  src={img} className={"card-img-top ".concat(classes.Image)}/>
						</div>
						<div className="card-body">
							<p className="card-text">I'm working on it.</p>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card mb-3 box-shadow">
						<div className="d-flex justify-content-between align-items-center">
							<img  src={img} className={"card-img-top ".concat(classes.Image)}/>
						</div>
						<div className="card-body">
							<p className="card-text">I'm working on it.</p>
						</div>
					</div>
				</div>
			</div>
		</div>


		// <div className="col-md-3">
		// 	<div className="card mb-3 box-shadow">
		// 		<div className="d-flex justify-content-between align-items-center">
		// 		<img  src={img} className={"card-img-top ".concat(classes.Image)}/>
		// 		</div>
		// 			<div className="card-body">
		// 				<p className="card-text">I'm working on it.</p>
		// 			</div>
		// 	</div>
		// </div>
	);
};

export default LessonCard;
