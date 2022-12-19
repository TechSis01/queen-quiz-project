import {useState,Fragment,useContext} from 'react'
import { globalVariable } from './Container'
import Result from './Result'
const Login = ()=>{
    const {displayQuiz,changeDisplay,firstName,setUserName} = useContext(globalVariable)
    const heading = "Queen's Quizlet"
    const intro = "If I sent this quiz to you personally I expect you to ace it,if you're here from twitter,don't worry there is no pressure"
    return(
        <Fragment>
           <div className={`login-container`}>
                <h3>{heading}</h3>
                <p>{intro}</p>
                {displayQuiz && <p id="login-instruction">Please input your name to begin quiz</p>}
                <div className="input-name-container">
                    <input type="text" placeholder="Enter your name" value={firstName} onChange={setUserName}></input>
                    <div>
                        <button onClick = {changeDisplay}>Start Quiz</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;