import React from 'react';
import { useParams } from 'react-router-dom';

import ALL from '../components/AllTheLessons';

const Lesson = () => {
    const id=useParams().id;
    console.log(id);
    const myLesson = ALL.filter(lesson => `:${lesson.id}`==id);
    console.log(myLesson[0].text);
    return(
    <div>{myLesson[0].text}</div>
    )
}

export default Lesson;