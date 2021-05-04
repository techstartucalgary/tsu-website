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

    function handleLogin(event){ // The event parameter will automatically be passed by React's onClick - read more at https://reactjs.org/docs/events.html
        event.preventDefault(); // This makes it so that pressing the button does not reload the page
        // Additionally, right now we are using document.getElementById to pass the results to the useEffect. This is theoretically functional, but it's not the best practice in React.
        // https://reactjs.org/docs/forms.html#handling-multiple-inputs This is a great alternative way of doing it using form names + state. 
        // I would also consider changing this into a TypeScript file eventually. You will have to strong-type certain variables, (see the WebDev guide for info, and you'd have to search what the appropriate types are for certain objects), but it could be very helpful for debugging.
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