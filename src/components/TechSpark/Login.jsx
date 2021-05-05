import React from "react";
import "./Login.css"
import logo from "images/tech-start-logo-white.png";
import design from "images/circuitBoard.svg"

function Login(props){
    return (
        <div className = "loginStyling">
        <link rel="stylesheet"
          href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
               
            <h1 className= "loginHeading">Login</h1>
            <form className = "loginForm">
                <div className = "loginDiv">
                  <i class="fa fa-envelope icon">
                  </i>
                 <input id="username" 
                       type="text"
                       placeholder="Email"/>
                </div>
                <div className = "loginDiv">
                <i class="fa fa-key icon">
                </i>
                    <input type="password" id="password" placeholder = "Password"/><br></br>
                </div>
                <input type="submit" id = "loginSubmit" value = "Login"/>


            </form>
            <div className = "switchStyling">
                <h5 className = "registerLink">Don't have an account?</h5>
                 <button className= "registerSwitch" onClick = {props.switchMode}><i class="fa fa-user icon">
                  </i> Sign Up</button>
            </div>
            
        </div>
    );
}

export default Login;