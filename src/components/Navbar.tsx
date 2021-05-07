import "./Navbar.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "images/tech-start-logo-white.png";
import { Link as LinkScroll } from "react-scroll";

function Header(props: any) {

    const [navbarExpanded, setNavbarExpanded] = useState(false)
    function toggleNavbarExpanded() {
        setNavbarExpanded(!navbarExpanded)

    }
    function hideNavbar() {
        setNavbarExpanded(false)
        console.log("mouse")
    }
    return <header className="navbar__container">
        <div className="navbar">
            <input type="checkbox" checked={navbarExpanded} onClick={toggleNavbarExpanded} id="navbar__nav-toggle" className="navbar__nav-toggle" />
            <a href="#">
                <LinkScroll
                    to="homePageTop"
                    spy={true}
                    offset={-70}
                    duration={500}>
                    <Link to="/" ><img src={logo} alt="logo" className="navbar__logo" /></Link>
                </LinkScroll>
            </a>
            <nav className="navbar__content " >
                <ul>
                <LinkScroll
                                to="homePageTop"
                                spy={true}
                                offset={-70}
                                duration={500}>
                        <Link onClick={hideNavbar} to="/" > About </Link></LinkScroll>
                        <li >
                        <a href="#" >
                            <LinkScroll
                                to="homePageTop"
                                spy={true}
                                offset={-70}
                                duration={500}>

                        <Link to="/community" > Community </Link></LinkScroll></a> </li>
                    <li>
                        <a href="#">
                            <LinkScroll
                                activeClass="active"
                                to="docsPageTop"
                                spy={true}
                                offset={-77}
                                duration={300}>
                                <Link onClick={hideNavbar} to="/resources" >Resources</Link>
                            </LinkScroll>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <LinkScroll
                                activeClass="active"
                                to="applyPageTop"
                                spy={true}
                                offset={-77}
                                duration={300}>
                                <Link onClick={hideNavbar} to="/apply" >Apply</Link>
                            </LinkScroll>
                        </a>
                    </li>

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