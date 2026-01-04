import React, {useState}from 'react';
import '../css/Quiz.css';
import {data} from './Questions'
import NavBar from './NavBar';

export const Quiz = () => {

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index])

    return (
        <>
        <NavBar />
        <div className='container'>
            <div className='question-app'>
            <h1>Bible Quiz App</h1>
            <hr />
            <h2>{index + 1}. {question.question}</h2>
            <ul>
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
                <li>{question.option4}</li>
            </ul>
            <h2 className='index'>{index +1} of {data.length} questions</h2>
            <button>Next</button>
            </div>
        </div>
        </>
    )
}