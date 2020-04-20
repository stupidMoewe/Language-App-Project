import React, { Component } from 'react';

import classes from './Elements.module.css';
import Element from './Element/Element';

class elements extends Component{
    state = {
        elementList:[
            {
                title: 'Procrastination',
                id: 1,
                level: 'B1'
            },
            {
                title: 'Unususal Jobs',
                id: 2,
                level: 'B1'
            },
            {
                title: 'Unususal Models',
                id: 3,
                level: 'B1'
            },
            {
                title: 'Sth else',
                id: 4,
                level: 'B1'
            },
            {
                title: 'Sth else',
                id: 5,
                level: 'B1'
            },
            {
                title: 'Sth else',
                id: 6,
                level: 'B1'
            },
            {
                title: 'Sth else',
                id: 7,
                level: 'B1'
            },
            {
                title: 'Sth else',
                id: 8,
                level: 'B1'
            },
            {
                title: 'Sth else',
                id: 9,
                level: 'B1'
            }
        ]
    }
    render(){
        const elements = this.state.elementList.map(e=> {
            return(<Element title={e.title} key={e.id} level={e.level}/>)
          
                
                // <Element key={e} title={e.title}/>
                
            }
        );
        return(
            <div className={classes.Elements}>
                {elements}
            </div>
        )
    }
}

export default elements;

