import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "images/tech-start-logo-white.png";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const toggleNavbarExpanded = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const hideNavbar = () => {
    setNavbarExpanded(false);
  };

  type NavbarLinkProps = {
    top: string;
    link: string;
    name: string;
  };

  const NavbarLink = (props: NavbarLinkProps) => (
    <li>
      <a href="#">
        <LinkScroll to={props.top} spy={true} offset={-80} duration={500}>
          <Link onClick={hideNavbar} to={props.link}>
            {" "}
            {props.name}{" "}
          </Link>
        </LinkScroll>
      </a>
    </li>
  );

  return (
    <header className="navbar__container">
      <div className="navbar">
        <input
          type="checkbox"
          checked={navbarExpanded}
          onChange={toggleNavbarExpanded}
          id="navbar__nav-toggle"
          className="navbar__nav-toggle"
        />
        <a href="#">
          <LinkScroll to="homePageTop" spy={true} offset={-70} duration={500}>
            <Link to="/">
              <motion.img
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                src={logo}
                alt="logo"
                className="navbar__logo"
              />
            </Link>
          </LinkScroll>
        </a>
        <nav className="navbar__content ">
          <motion.ul initial={{ y: -250 }} animate={{ y: 0 }}>
            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="homePageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/">
                    About
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/#projects">
                    Tech Start Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/#events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/#sponsors">
                    Our Sponsors
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="teamPageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/team">
                    Team
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/team#the-board">
                    The Board
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/team#our-team">
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="projectsPageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/projects">
                    Projects
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/projects#showcase-winners">
                    Final Showcase Winners
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/projects#featured-projects">
                    Featured Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/projects#past-projects">
                    Past Projects
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar__section">
              <a href="#">
                <LinkScroll to="applyPageTop" spy={true} offset={-80} duration={500}>
                  <Link onClick={hideNavbar} to="/apply">
                    Apply
                  </Link>
                </LinkScroll>
              </a>
              <ul className="navbar__subsections">
                <li>
                  <Link onClick={hideNavbar} to="/apply#what-we-do">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/apply#faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link onClick={hideNavbar} to="/apply#applications">
                    Applications
                  </Link>
                </li>
              </ul>
            </li>

            <NavbarLink top="merchPageTop" link="/merch" name="Merch" />
            <NavbarLink top="galleryPageTop" link="/gallery" name="Gallery" />
            <NavbarLink top="docsPageTop" link="/resources" name="Resources" />
          </motion.ul>
        </nav>
        <label
          htmlFor="navbar__nav-toggle"
          className="navbar__nav-toggle-label"
        >
          <span></span>
        </label>
      </div>
      <div className="navbar__placeholder"></div>
    </header>
  );
};
export default Header;
