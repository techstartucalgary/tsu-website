import React, { Component } from "react"
import "./postButton.css"

function PostButton(props : any){
  function buttonClicked(){
    props.showPost()
    props.showPostCreation()
  }  
        return(
              <button className="postButton" onClick={buttonClicked}>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <div className="postButtonPrompt">Say Something!</div>
              </button>
          );
  }

export default PostButton