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

  const scrollToSection = (sectionId: string) => {
    hideNavbar();
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <header className="navbar__container">
      <div className="navbar">
        <input
          type="checkbox"
          checked={navbarExpanded}
          onClick={toggleNavbarExpanded}
          id="navbar__nav-toggle"
          className="navbar__nav-toggle"
        />
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

        <nav className="navbar__content ">
          <motion.ul initial={{ y: -250 }} animate={{ y: 0 }}>
            <li className="navbar__item">
              <Link to="/" > About </Link>
              <ul className="dropdown">
                <li onClick={() => scrollToSection('projects')}><Link to="/" onClick={hideNavbar}>Our Projects</Link></li>
                <li onClick={() => scrollToSection('events')}><Link to="/" onClick={hideNavbar}>Events</Link></li>
                <li onClick={() => scrollToSection('sponsors')}><Link to="/" onClick={hideNavbar}>Sponsors</Link></li>
              </ul>
            </li>
            <li><Link to="/team" onClick={hideNavbar}>Team</Link></li>
            <li><Link to="/projects" onClick={hideNavbar}>Projects</Link></li>
            <li><Link to="/apply" onClick={hideNavbar}>Apply</Link></li>
            <li><Link to="/gallery" onClick={hideNavbar}>Gallery</Link></li>
            <li><Link to="/resources" onClick={hideNavbar}>Resources</Link></li>
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
