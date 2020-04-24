import React, { Component } from 'react';

import LessonItem from './LessonItem';
import classes from './LessonsList.module.css';

class elements extends Component{
    state = {
        elementList:[
            {
                title: 'Procrastination',
                id: 1,
                level: 'B1',
                source: "https://picsum.photos/id/11/200/300"
            },
            {
                title: 'Unususal Jobs',
                id: 2,
                level: 'B1',
                source: "https://picsum.photos/id/12/200/300"
            },
            {
                title: 'Unususal Models',
                id: 3,
                level: 'B1',
                source: "https://picsum.photos/id/13/200/300"
            },
            {
                title: 'Sth else',
                id: 4,
                level: 'B1',
                source: "https://picsum.photos/id/14/200/300"
            },
            {
                title: 'Sth else',
                id: 5,
                level: 'B1',
                source: "https://picsum.photos/id/15/200/300"
            },
            {
                title: 'Sth else',
                id: 6,
                level: 'B1',
                source: "https://picsum.photos/id/16/200/300"
            },
            {
                title: 'Sth else',
                id: 7,
                level: 'B1',
                source: "https://picsum.photos/id/17/200/300"
            },
            {
                title: 'Sth else',
                id: 8,
                level: 'B1',
                source: "https://picsum.photos/id/18/200/300"
            },
            {
                title: 'Sth else',
                id: 9,
                level: 'B1',
                source: "https://picsum.photos/id/19/200/300"
            }
        ]
    }
    render(){
        const elements = this.state.elementList.map(e=> {
            return(<LessonItem title={e.title} key={e.id} level={e.level} source={e.source}/>)
            }
        );
        return(
            <div className={classes.LessonsList}>
                {elements}
            </div>
        )
    }
}

export default elements;

