import "./Navbar.css"
import React from 'react';
import {Link} from 'react-router-dom';
import logo from "images/tech-start-logo-white.png";

function Header (props: any){
 var temp:string = props.HelloName;
 return <header className="navbar">



 <input type="checkbox" id="navbar__nav-toggle" className="navbar__nav-toggle"/>
 <img src ={logo} alt="logo" className="navbar__logo"/>
 <nav className="navbar__content">
 
     
     <ul>
         <li> <a href ="#"><Link to ="/" > About</Link></a> </li> 
         <li> <a href ="#"><Link to ="/docs" >Docs</Link></a> </li>
         <li> <a href ="#"><Link to ="/" >Projects</Link></a> </li>
         <li> <a href ="#"><Link to ="/" >Get Involved</Link></a> </li>
         <li> <a href ="#"><Link to ="/" >Resources</Link></a> </li>
     </ul>
     
 </nav>
 
    <label htmlFor= "navbar__nav-toggle" className="navbar__nav-toggle-label">
        <span></span>
   </label>


</header>  
}
export default Header;