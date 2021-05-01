import React, {useState} from "react";
import Login from "./Login"
import Register from "./Register"
import "./SignIn.css"

function SignIn(props){
    const [isLoginMode, setIsLoginMode] = useState(true);
    
   function handleClick(){
        setIsLoginMode(!isLoginMode)
    }
    return (
        <div className= {"signInBackground " + (isLoginMode ? "signInBackground--loginMode" : "signInBackground--registerMode")}>
        
            {isLoginMode ? 
                <div className = "loginHeaderDiv"><div className = "loginDesign"></div> 
                <p><Login
                    switchMode = {handleClick}
                /></p></div>
                 : <p><Register
                    switchMode = {handleClick}
                /></p>}  
      </div>
    );
}

export default SignIn;