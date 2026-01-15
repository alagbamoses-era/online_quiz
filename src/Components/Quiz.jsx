import React, {useState, useRef, useEffect}from 'react';
import '../css/Quiz.css';
import {data} from './Questions'
import NavBar from './NavBar';

// Shuffle function
const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
}

export const Quiz = () => {
    const [quizData, setQuizData] = useState(null);
    const [index, setIndex] = useState(0);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);

    const optionRefs = useRef([]);

    // Initialize randomized quiz
    useEffect(() => {
        setQuizData(shuffleArray(data));
    }, []);

    if (!quizData) return <div>Loading...</div>;

    const question = quizData[index];
    const isMultiSelect = Array.isArray(question.ans);
    const options = question.options || question.option;

    const getOptionClass = (i) => {
        if (selectedOptions.includes(i + 1)) return 'selected';
        return '';
    };

    const checkAns = (e, optionIndex) => {
        if (lock) return;

        // Text input questions
        if (question.ansText) return;

        // Multiple choice or multi-select
        if (isMultiSelect) {
            // Multi-select
            if (selectedOptions.includes(optionIndex + 1)) return;

            const newSelected = [...selectedOptions, optionIndex + 1];
            setSelectedOptions(newSelected);
            e.target.classList.add("selected");

            const correctAns = question.ans.sort((a, b) => a - b);
            const selected = newSelected.sort((a, b) => a - b);

            // Check if selection is correct
            if (JSON.stringify(correctAns) === JSON.stringify(selected)) {
                setLock(true);
                setScore(prev => prev + 1);
                newSelected.forEach(idx => {
                    optionRefs.current[idx - 1]?.classList.remove("selected");
                    optionRefs.current[idx - 1]?.classList.add("correct");
                });
            }
            // Lock when all expected options are selected (even if wrong)
            else if (newSelected.length === question.ans.length) {
                setLock(true);
                newSelected.forEach(idx => {
                    optionRefs.current[idx - 1]?.classList.remove("selected");
                    optionRefs.current[idx - 1]?.classList.add("wrong");
                });
                correctAns.forEach(idx => {
                    optionRefs.current[idx - 1]?.classList.add("correct");
                });
            }
        } else {
            // Single choice
            if (question.ans === optionIndex + 1) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                optionRefs.current[question.ans - 1]?.classList.add("correct");
            }
        }
    };

    const checkTextAns = () => {
        if (lock || !question.ansText) return;

        if (userInput.trim().toLowerCase() === question.ansText.trim().toLowerCase()) {
            setScore(prev => prev + 1);
        }
        setLock(true);
    };

    const next = () => {
        if (!lock) return;

        if (index === quizData.length - 1) {
            setResult(true);
            return;
        }

        setIndex(index + 1);
        setLock(false);
        setUserInput("");
        setSelectedOptions([]);
        optionRefs.current.forEach(ref => {
            if (ref) {
                ref.classList.remove("correct", "wrong", "selected");
            }
        });
        optionRefs.current = [];
    };

    const reset = () => {
        setQuizData(shuffleArray(data));
        setIndex(0);
        setLock(false);
        setScore(0);
        setResult(false);
        setUserInput("");
        setSelectedOptions([]);
        optionRefs.current = [];
    };

    return (
        <>
        <NavBar />
        <div className='container'>
            <h1>Bible Quiz App</h1>
            <hr />
            
            {!result ? (
                <>
                    <h2 className='quiz-question'>{index + 1}. {question.question}</h2>
                    
                    {/* Options */}
                    {options && options.length > 0 && (
                        <ul>
                            {options.map((option, i) => (
                                <li 
                                    key={i} 
                                    ref={el => optionRefs.current[i] = el}
                                    onClick={(e) => checkAns(e, i)}
                                    className={getOptionClass(i)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                    
                    {/* Text Input */}
                    {question.ansText && (
                        <div className='text-input-section'>
                            <input 
                                type='text'
                                placeholder='type your answer' 
                                value={userInput} 
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && checkTextAns()}
                                disabled={lock}
                            />
                            <button onClick={checkTextAns} disabled={lock}>Submit</button>
                        </div>
                    )}
                    
                    <button onClick={next} disabled={!lock}>Next</button>
                    <div className='index'>
                        <h2>{index + 1} of {quizData.length} questions</h2>
                    </div>
                </>
            ) : (
                <>
                    <h2>You scored {score} out of {quizData.length}</h2>
                    <button onClick={reset}>Reset</button>
                </>
            )}
        </div>
    </>    
    )
}

