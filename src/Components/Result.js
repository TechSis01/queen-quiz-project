import {useState,useContext,useEffect,Fragment} from 'react'
import { globalVariable } from './Container'
import { questions } from './QuestionBank'
const Result = ()=>{
    const {firstName,totalScore}=useContext(globalVariable)
    
    const restartQuiz = ()=>{
        window.location.reload(true);
    }
    return(
        <Fragment>
            <div className= "result-Container">
                <h1>Quiz Completed</h1>
                {totalScore >= 10 && <p>Congratulations {firstName},  you scored  {totalScore}/{questions.length}!!!!,so you know me like this?I am proud of youuu!!</p>}
                {totalScore < 10 && totalScore >=5 && <p>{firstName} You tried your best, you scored  {totalScore}/{questions.length},next time try harder okay?</p>}
                {totalScore  <5 && <p>{firstName} better luck next time, you scored {totalScore}/{questions.length},TRY NOT TO FAIL IN THE FUTURE!!</p>}
                <button onClick = {restartQuiz}>Home</button>
            </div>
        </Fragment>
    )
}

export default Result;