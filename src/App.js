import logo from './logo.svg';
import './App.css';
import { useState,createContext, useEffect } from 'react';
import Login from './Components/Login';
import Questions from './Components/Questions';
import Result from './Components/Result';
import { questions } from './Components/QuestionBank';
export const globalVariable = createContext();
function App() {
  // THIS STATE WILL HOLD THE NAME OF THE PERSON THAT JUST LOGGED IN TO TAKE THE QUIZ
  const [firstName,setFirstName] = useState('')
  // THIS STATE WILL HELP TO CHANGE FROM THE LOGIN PAGE TO THE QUIZ PAGE
  const [displayQuiz,setDisplayQuiz] = useState(true)
  // THIS STATE WILL HELP TO CHANGE THE QUESTION WHEN YOU PRESS ON THE NEXT BUTTON
  const [questionCount,setQuestionCount] = useState(0)
  // THIS STATE WILLL HELP TO DISPLAY THE FINAL RESULT PAGE WHEN YOU'RE DONE WITH THE QUIZ
  const [displayResult,setDisplayResult] = useState(false)

  // THESE DIFFERENT STATES WILL HELP TO KNOW IF THE ANSWER IS CORRECT WHEN YOU CLICK ON IT
  const[correctAnswerA,setCorrectAnswerA] = useState(false)
  const[correctAnswerB,setCorrectAnswerB] = useState(false)
  const[correctAnswerC,setCorrectAnswerC] = useState(false)
  const[correctAnswerD,setCorrectAnswerD] = useState(false)
 
  // STATE TO HOLD THE TOTAL POINT OF THE USER
  const[totalScore,setTotalScore]= useState(0)


  //STATE TO DISABLE CLICK ANY OTHER OPTION WHEN THE CORRECT ANSWER HAS ALREADY BEEN CLICKED
  const [nextbtn,setNextBtn] = useState(false)

  //STATE FOR THE TIMER
  const[timer,setTimer] = useState(20)


  //FUNCTION TO UPDATE THE TIMER(COUNTDOWN)
  useEffect(()=>{
    const Quiztimer =
    timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
  return () => clearInterval(Quiztimer);
  },[timer])

  //FUNCTION TO RESTART TIMER FROM THE BEGINNING
  const restartTimer = ()=>{
    setTimer(20)
  }
  //FUNCTION TO UPDATE TOTAL POINT OF THE USER AFTER QUIZ
  const updateTotalScore = ()=>{
    setTotalScore((prev)=>{
      return prev + 1
    })
  }
  
  //THIS FUNCTION DISABLES CLICKING ANY OTHER OPTION WHEN YOU CLICK ON THE CORRECT ANSWER
  const disableNextBtn = ()=>{
      setNextBtn(true)
  }
  
//FUNCTION TO RESET THE STYLES ADDED TO THE CORRECT ANSWER DIVS WHEN YOU CLICK ON THE CORRECT ANSWER
  const resetAll = ()=>{
    setCorrectAnswerA(false)
    setCorrectAnswerB(false)
    setCorrectAnswerC(false)
    setCorrectAnswerD(false)
    setNextBtn(false)
  }
   //FUNCTION TO CHANGE THE QUESTION
   const changeQuestion = ()=>{
    if(questionCount === questions.length-1){
      setDisplayResult(true)
    }
    else if(questionCount < questions.length){
    setQuestionCount((prev)=>{
        return prev + 1;
    })
    resetAll()
    restartTimer()
  }
}

//Function to change from the login page to the Quiz page
  const changeDisplay = (e)=>{
    if(firstName.length === 0){
        setDisplayQuiz(true)
    }
    else if(firstName.length > 0){
    setDisplayQuiz(false)
    }
  }

//Function to store the name of the user that has logged in to start the quiz
  const setUserName = (e)=>{
    setFirstName(e.target.value)
  }
  return (
      <div>
        <globalVariable.Provider value = {{firstName,setUserName,
          displayQuiz,displayResult,changeDisplay,
          questionCount,changeQuestion,correctAnswerC,
          correctAnswerA,correctAnswerB,correctAnswerD,
          setCorrectAnswerC,setCorrectAnswerA,setCorrectAnswerB,
          setCorrectAnswerD,updateTotalScore,totalScore,disableNextBtn,nextbtn,timer}}>
           {displayQuiz && <Login />}
           {!displayQuiz && <Questions />}
           {displayResult && <Result />}
        </globalVariable.Provider>
      </div>
  )
}


export default App;
