import "./Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "images/tech-start-logo-white.png";
import { Link as Linkk } from "react-scroll";

function Header(props: any) {
    var temp: string = props.HelloName;
    return <header className="navbar__container">
        <div className="navbar">
            <input type="checkbox" id="navbar__nav-toggle" className="navbar__nav-toggle" />
            <a href="#"><Linkk
    activeClass="active"
    to="HomePageSection1"
    spy={true}
    smooth={true}
    offset={20}
    duration={500}
><img src={logo} alt="logo" className="navbar__logo" /></Linkk></a>
            <nav className="navbar__content">
                <ul>
                    <li> <a href="#"><Linkk
    activeClass="active"
    to="HomePageSection1"
    spy={true}
    smooth={true}
    offset={20}
    duration={500}
> About</Linkk></a> </li>
                    <li><a href="#"> <Link to="/docs"><Linkk
    activeClass="active"
    to="DocsPageSection1"
    spy={true}
    smooth={true}
    offset={-77}
    duration={500}
> Docs</Linkk></Link> </a></li>
                    <li> <a href="#"><Link to="/" >Projects</Link></a> </li>
                    <li> <a href="#"><Link to="/" >Get Involved</Link></a> </li>
                    <li> <a href="#"><Link to="/" >Resources</Link></a> </li>
                </ul>
            </nav>
            <label htmlFor="navbar__nav-toggle" className="navbar__nav-toggle-label">
                <span></span>
            </label>
<div></div>
        </div>
        <div className="navbar__placeholder"></div>

    </header>
}
export default Header;