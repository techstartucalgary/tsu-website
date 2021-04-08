import React from "react"
import "./postButton.css"

function PostButton(props){
    
    return(
      
          <a href={props.link}>
              <button>
                Say Something!
              </button>
          </a>
    );
}
export default PostButton