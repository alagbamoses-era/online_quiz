import React from 'react';
import '../css/Quiz.css';

export const Quiz = () => {

    return (
        <div className='container'>
            <div className='question-app'>
            <h1>Quiz App</h1>
            <hr />
            <h2>1. When Mary became pregnant, Mary and Joseph were:</h2>
            <ul>
                <li>Married</li>
                <li>Engaged</li>
                <li>Just friends</li>
                <li>None of the above</li>
            </ul>
            <h2 className='index'>1 of 10 questions</h2>
            <button>Next</button>
            </div>
        </div>
    )
}