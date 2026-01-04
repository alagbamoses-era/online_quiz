import React, {useState, useRef}from 'react';
import '../css/Quiz.css';
import {data} from './Questions'
import NavBar from './NavBar';

export const Quiz = () => {

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, SetScore] =  useState(0);
    const [result, setResult] = useState(false)

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4]

    const checkAns = (e, q_ans) => {
        if (lock === false) {
            if (question.ans === q_ans) {
                e.target.classList.add("correct");
                setLock(true)

            } else {
                e.target.classList.add("wrong")
                setLock(true)
            }
        }
    }

    const next = () => {
        if (lock===true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0

            }
            setIndex(index +1)
            setQuestion(data[index])
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("correct")
                option.current.classList.remove("wrong");
                return null

            })

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
                <li ref={Option1} onClick={((e) => {checkAns(e, 1)})}>{question.option1}</li>
                <li ref={Option2} onClick={((e) => {checkAns(e, 2)})}>{question.option2}</li>
                <li ref={Option3} onClick={((e) => {checkAns(e, 3)})}>{question.option3}</li>
                <li ref={Option4} onClick={((e) => {checkAns(e, 4)})}>{question.option4}</li>
            </ul>
            <h2 className='index'>{index +1} of {data.length} questions</h2>
            <button onClick={next}>Next</button>
            </div>
        </div>
        </>
    )
}