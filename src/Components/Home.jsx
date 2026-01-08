import React from 'react'
import '../css/Quiz.css'
import { Quiz } from './Quiz'

function Home() {


    return (
        <div className='home'>
            <h1>Game Instruction</h1>
            <h2>You are welcome to Bible Quiz Game</h2>
            <p>The purpose of this game is to know how conversant  you are to
                the Bible. It is good to note that some questions in this game has
                more than one answer. Carefully read through the question and
                select your answers.
            </p>

            <p>There are 10 questions all together. You can only click on next
                button to move to the next question but you can not access the previous question again.
            </p>

            <p>At the end of the question, you will have access to your score</p>
            
            <br />
            <p>I wish you all the best❤️.</p>

            <button>Go to Quiz</button>

        </div>
    )
}

export default Home
