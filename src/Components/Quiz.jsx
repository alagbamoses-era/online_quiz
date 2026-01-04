import React, {useState}from 'react';
import '../css/Quiz.css';
import {data} from './Questions'
import NavBar from './NavBar';

export const Quiz = () => {

    const [index, setIndex] = useState(1);
    const [question, setQuestion] = useState(data[index])

    const checkAns = (e, q_ans) => {
        if (question.ans === q_ans) {
            e.target.classList.add("correct")

        } else {
            e.target.classList.add("wrong")
        }
    }

    return (
        <>
        <NavBar />
        <div className='container'>
            <div className='question-app'>
            <h1>Bible Quiz App</h1>
            <hr />
            <h2>{index + 1}. {question.question}</h2>
            <ul>
                <li onClick={((e) => {checkAns(e, 1)})}>{question.option1}</li>
                <li onClick={((e) => {checkAns(e, 2)})}>{question.option2}</li>
                <li onClick={((e) => {checkAns(e, 3)})}>{question.option3}</li>
                <li onClick={((e) => {checkAns(e, 4)})}>{question.option4}</li>
            </ul>
            <h2 className='index'>{index +1} of {data.length} questions</h2>
            <button>Next</button>
            </div>
        </div>
        </>
    )
}