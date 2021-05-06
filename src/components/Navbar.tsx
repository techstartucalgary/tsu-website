import "./Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "images/tech-start-logo-white.png";
import { Link as LinkScroll } from "react-scroll";

function Header(props: any) {

    return <header className="navbar__container">
        <div className="navbar">
            <input type="checkbox" id="navbar__nav-toggle" className="navbar__nav-toggle" />
            <a href="#"><LinkScroll

                to="homePageTop"
                spy={true}

                offset={-70}
                duration={500}><Link to="/" ><img src={logo} alt="logo" className="navbar__logo" /></Link></LinkScroll></a>
            <nav className="navbar__content">
                <ul>
                    <li> <a href="#"><LinkScroll

                        to="homePageTop"
                        spy={true}

                        offset={-70}

                        duration={500}><Link to="/" > About </Link></LinkScroll></a> </li>
                    <li> <a href="#"><LinkScroll
                        activeClass="active"
                        to="docsPageTop"
                        spy={true}

                        offset={-77}
                        duration={300}
                    ><Link to="/resources" >Resources</Link></LinkScroll></a> </li>

                    <li> <a href="#"><LinkScroll
                        activeClass="active"
                        to="applyPageTop"
                        spy={true}

                        offset={-77}
                        duration={300}
                    ><Link to="/apply" >Get Involved</Link></LinkScroll></a> </li>

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