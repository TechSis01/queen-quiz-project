import {useState, Fragment,useContext,useEffect,useRef} from 'react'
import { globalVariable } from './Container'
import { questions } from './QuestionBank'

const Questions = ()=>{
    //STATE THAT WILL CHANGE WHEN THE ANSWER IS CORRECT
    // const[incorrectAnswer,setInCorrectAnswer] = useState(false)
    const{questionCount,displayQuiz,changeQuestion,displayResult,
        correctAnswerC,setCorrectAnswerC,correctAnswerA,correctAnswerB,
        correctAnswerD,setCorrectAnswerA,setCorrectAnswerB,setCorrectAnswerD,updateTotalScore,
        disableNextBtn,nextbtn,timer} = useContext(globalVariable)
    
    
    const optionARef = useRef(null)//This points to the text inside the option A
    const optionBRef = useRef(null)//This points to the text inside the option B
    const optionCRef = useRef(null)//This points to the text inside option C
    const optionDRef = useRef(null)//This points to the text inside option D
    //const timerRef = useRef(null)
    //I put each of the divs that has each option in an array, so I can loop through them and find the correct answer ,when you click on the wrong option
    const [optionArray,setOptionArray] = useState([optionARef.current,optionBRef.current,optionCRef.current,optionDRef.current])

    //The useEffect here,changes the value of the options in the div whenever we change to the next question
    //So it helps the div update the option when we change to the next question
   useEffect(()=>{
        setOptionArray([optionARef.current,optionBRef.current,optionCRef.current,optionDRef.current])
   },[questionCount])
   
   
    //Function to check for the correct answer for option A
    const checkAnswer = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
        if(optionARef.current.innerText !== correctAnswer ){
            optionArray.forEach((option)=>{
              //Here I am looping through the options array to find the correct option
                if(option.innerText === correctAnswer){
                    let incorrect = e.currentTarget
                    option.classList.add('test')
                    e.currentTarget.classList.add('test2')
                   
                    setTimeout(()=>{
                        
                        option.classList.remove('test')
                        incorrect.classList.remove('test2')
                        changeQuestion()
                       
                    },1000)
                }
            })  
        }
        else if(optionARef.current.innerText === correctAnswer){
            setCorrectAnswerA(true)
            updateTotalScore()
            disableNextBtn()
            changeQuestion()
        }  

    }

    //Function to check for the correct answer for option B
    const checkAnswer2 = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
        if(optionBRef.current.innerText !== correctAnswer ){
            optionArray.forEach((option)=>{
              
                if(option.innerText === correctAnswer){
                    let incorrect = e.currentTarget
                    option.classList.add('test')
                    e.currentTarget.classList.add('test2')
        
                    setTimeout(()=>{
                    
                        option.classList.remove('test')
                        incorrect.classList.remove('test2')
                        changeQuestion()
                       
                    },1000)
                }
            })
        }
        else if(optionBRef.current.innerText === correctAnswer){
            setCorrectAnswerB(true)
            updateTotalScore()
            disableNextBtn()
            changeQuestion()
        }
    
    }
    //Function to check for the correct answer for option C
    const checkAnswer3 = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
        if(optionCRef.current.innerText !== correctAnswer ){
            optionArray.forEach((option)=>{
                if(option.innerText === correctAnswer){
                    let incorrect = e.currentTarget
                    option.classList.add('test')
                    e.currentTarget.classList.add('test2')
                   
                    setTimeout(()=>{
                        option.classList.remove('test')
                        incorrect.classList.remove('test2')
                        changeQuestion()
                    },1000)
                }
            })
        }
        else if(optionCRef.current.innerText === correctAnswer){
            setCorrectAnswerC(true)
            updateTotalScore()
            disableNextBtn()
            changeQuestion()
        }

    }
    //Function to check for the correct answer for option D
    const checkAnswer4 = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
        if(optionDRef.current.innerText !== correctAnswer ){
           
            optionArray.forEach((option)=>{
               
                if(option.innerText === correctAnswer){
                    let incorrect = e.currentTarget
                    option.classList.add('test')
                    e.currentTarget.classList.add('test2')
                   
                    setTimeout(()=>{
                        
                        option.classList.remove('test')
                        incorrect.classList.remove('test2')
                        changeQuestion()
                    },1000)
                }
            })
        }
        else if(optionDRef.current.innerText === correctAnswer){
            setCorrectAnswerD(true)
            updateTotalScore()
            disableNextBtn()
            changeQuestion()
        }
    }


    return(
        <Fragment>
            <div className={`question-container ${displayResult ? "question-container-empty" : ""}`}>
                    <div className="timer-container">
                        <h4>{questions[questionCount].query}</h4>
                        <div id="timer" className={`${timer < 5 ? "timer-red" : " "}`}>{timer}</div>
                    </div>
                <div className="options-container">
                        <div className="options">
                            <div ref={optionARef} onClick={checkAnswer} className = {`${correctAnswerA ? 'option-correct' : ''} ${nextbtn ? 'disable-next-btn' : ''}`} >{questions[questionCount].optionA}</div>
                            <div ref={optionBRef} onClick={checkAnswer2} className = {`${correctAnswerB ? 'option-correct' : ''} ${nextbtn ? 'disable-next-btn' : ''}`} >{questions[questionCount].optionB}</div>
                            <div ref={optionCRef} onClick={checkAnswer3} className = {`${correctAnswerC ? 'option-correct' : ''} ${nextbtn ? 'disable-next-btn' : ''}`} >{questions[questionCount].optionC}</div>
                            <div ref={optionDRef} onClick={checkAnswer4} className = {`${correctAnswerD ? 'option-correct' : ''} ${nextbtn ? 'disable-next-btn' : ''}`} >{questions[questionCount].optionD}</div>
                        </div>
                </div>
                {/* <button className="next-btn" onClick={changeQuestion}>Next</button> */}
            </div>
        </Fragment>
    )
}

export default Questions;