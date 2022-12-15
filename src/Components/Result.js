import {useState,useContext,useEffect,Fragment} from 'react'
import { globalVariable } from '../App'
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
                {totalScore >= 10 && <p>Congratulations {firstName},  you scored is {totalScore}/{questions.length}!!!!,so you know me like this?</p>}
                {totalScore < 10 && totalScore >=5 && <p>{firstName} You tried your best, you scored is {totalScore}/10,next time try harder okay?</p>}
                {totalScore  <5 && <p>{firstName} better luck next time, you scored is {totalScore}/10,next time try harder okay?try not to fail next time.</p>}
                <button onClick = {restartQuiz}>Home</button>
            </div>
        </Fragment>
    )
}

export default Result;