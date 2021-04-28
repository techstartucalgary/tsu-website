import "./Navbar.css"
import React from 'react';
//import { Link } from 'react-router-dom';
import logo from "images/tech-start-logo-white.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Header(props: any) {
    var temp: string = props.HelloName;
    return <header className="navbar__container">
        <div className="navbar">
            <input type="checkbox" id="navbar__nav-toggle" className="navbar__nav-toggle" />
            <img src={logo} alt="logo" className="navbar__logo" />
            <nav className="navbar__content">
                <ul>
                    <li> <a href="#"><Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
> About</Link></a> </li>
                    <li> <a href="#"><Link to="/docs" >Docs</Link></a> </li>
                    <li> <a href="#"><Link to="/" >Projects</Link></a> </li>
                    <li> <a href="#"><Link to="/" >Get Involved</Link></a> </li>
                    <li> <a href="#"><Link to="/" >Resources</Link></a> </li>
                </ul>
            </nav>
            <label htmlFor="navbar__nav-toggle" className="navbar__nav-toggle-label">
                <span></span>
            </label>

        </div>
        <div className="navbar__placeholder"></div>

    </header>
}
export default Header;