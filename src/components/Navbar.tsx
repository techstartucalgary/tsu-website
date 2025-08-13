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
            <NavbarLink top="homePageTop" link="/" name="About" />
            <NavbarLink top="teamPageTop" link="/team" name="Team" />
            <NavbarLink
              top="projectsPageTop"
              link="/projects"
              name="Projects"
            />
            <NavbarLink top="applyPageTop" link="/apply" name="Apply" />
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
