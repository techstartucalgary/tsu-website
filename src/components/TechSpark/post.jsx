import React, { useState, View } from "react";
import './post.css'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from "react-icons";

function PostContainer(props) {
  const [active, setActive] = useState(false)

  function toggle() {
    setActive(!active)
  }

  return <div className={'expandableForumPost' + (active ? ' expandableForumPost--active' : '')}>
    {props.title}
    <p className = "author">{props.author}</p>
    <p className = "date">{props.date}</p>
                <hr></hr>
                <p className = "description">{props.description}</p>
                <button className={"forumPostButton" + (active ? ' forumPostButton--active' : '')} type="button" onClick={toggle}><IconContext.Provider value={{ size: "1.5em" }}><MdKeyboardArrowDown /></IconContext.Provider></button>
  </div>

}

export default PostContainer