import React from 'react';

import { Link } from 'react-router-dom';

import classes from './HomePage.module.css';

const UserPage = () => (
	<div className={classes.HomePage}>
		<div className={classes.Header}>
			<div className={classes.PresentationFrame}>
				<h2 className={classes.Title}>Light Language</h2>
				<h3 className={classes.descriptionOne}>Learn languages by reading texts</h3>
				{/* <h2 className={classes.descriptionTwo}>For great progress</h2> */}
			</div>
		</div>
		{/* <div className={classes.Description}>What is Light Language ?</div> */}
		<div className={classes.Description}>
			<Link to="/lessons">Begin now your learning !</Link>
		</div>
		<div className={classes.Boxes}>
			<div className={classes.Box}>
				<h2>+20 Books</h2>
			</div>
			<div className={classes.Box}>
				<h2>Discover new languages</h2>
			</div>
			<div className={classes.Box}>
				<h2>Create your own vocalury list</h2>
			</div>
		</div>
		{/* <div className={classes.RegisterFrame}>
            <button className={classes.BtnRegisterFrame}>Register now</button>
        </div> */}
	</div>
);

export default UserPage;
