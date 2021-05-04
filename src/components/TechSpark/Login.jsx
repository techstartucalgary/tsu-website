import "./Login.css"
import React, { Component, useEffect } from 'react';
import axios from "axios";
import { setTokenSourceMapRange } from "typescript";

const dataRoot = "https://techstartbackend.herokuapp.com"

function Login(props){
    
    const [tracker, setTracker] = React.useState(false)

     useEffect(() => {
        axios.post(
            `${dataRoot}/login`, {
                username: document.getElementById('loginUsername').value,
                password: document.getElementById('loginPassword').value
               // username: 'TaylorNoel',
               // password: 'TtaSnoU20'
            }
          ).then((response) => {
                
                let token = response.data.token;;
                console.log(token)
                
          }, (error) => {
            console.log(error);

          }); 
    },[tracker]);

    function handleLogin(){
        setTracker(!tracker);
    }

    return (
        <div className = "loginStyling">
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
               
            <h1 className= "loginHeading">Login</h1>
            <form className = "loginForm">
                <div className = "loginDiv">
                  <i className="fa fa-envelope icon">
                  </i>
                 <input id="loginUsername" type="text" placeholder="Email"/>
                </div>
                <div className = "loginDiv">
                <i className ="fa fa-key icon">
                </i>
                    <input type="password" id="loginPassword" placeholder = "Password"/><br></br>
                </div>
                <input type="submit" id = "loginSubmit" value = "Login" onClick = {handleLogin}/>


            </form>
            <div className = "switchStyling">
                <h5 className = "registerLink">Don't have an account?</h5>
                 <button className= "registerSwitch" onClick = {props.switchMode}><i className ="fa fa-user icon">
                  </i> Sign Up</button>
            </div>
            
        </div>
    );
}

export default Login;