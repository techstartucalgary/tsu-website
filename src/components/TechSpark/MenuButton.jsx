import React from "react"
import "./MenuButton.css"

function MenuButton(props){
  function buttonClicked(){
    console.log("Post Button Clicked")
    props.showPost()
  }
    return(
      
          <a href={props.link}>
              <button className="MenuButton" onClick={buttonClicked}>
                {props.text}
              </button>
          </a>
    );
}
export default MenuButton