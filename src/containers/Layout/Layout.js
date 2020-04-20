import React from 'react';
import { Route } from 'react-router-dom';

import Topbar from '../../componants/Topbar/Topbar';
import Homepage from '../../componants/Homepage/Homepage';
import Lessons from '../../componants/Lessons/Lessons';
import Dummy from '../../componants/Dummy/Dummy';
import classes from './Layout.module.css';

const layout = () =>(
    <div className={classes.Layout}>
        <Topbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/lessons" exact component={Lessons} />
        <Route path="/lesson/:id" exact component={Dummy} />
    </div>
)

export default layout;