import React, {useState} from "react";
import Login from "./Login"
import Register from "./Register"
import "./SignIn.css"

function SignIn(props: any){
    const [isLoginMode, setIsLoginMode] = useState(true);
    
   function handleClick(){
        setIsLoginMode(!isLoginMode)
    }

    return (
        <div className= {"signInBackground " + (isLoginMode ? "signInBackground--loginMode" : "signInBackground--registerMode")}>
            {isLoginMode ? 
                <div className = "loginHeaderDiv"><div className = "loginDesign"></div> 
                <div><Login
                    switchMode = {handleClick}
                    hide = {props.close}
                /></div></div>
                 : <div><Register
                    switchMode = {handleClick}
                    hide = {props.close}
                /></div>}  
      </div>
    );
}

export default SignIn;