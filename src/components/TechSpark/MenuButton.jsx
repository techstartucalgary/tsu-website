import React from "react"
import "./MenuButton.css"

function LoginButton(props){
    
    return(
      
          <a href={props.link}>
              <button className="MenuButton">
                {props.text}
              </button>
          </a>
    );
}
export default LoginButton