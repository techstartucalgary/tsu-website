import "./Navbar.css";
import * as S from "./Navbar.styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "images/tech-start-logo-white.png";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion/dist/framer-motion";

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
    <S.NavbarContainer>
      <S.Navbar>
        <S.Navbar_NavToggle
          type="checkbox"
          checked={navbarExpanded}
          onClick={toggleNavbarExpanded}
          id="navbar__nav-toggle"
        />
        <a href="#">
          <LinkScroll to="homePageTop" spy={true} offset={-70} duration={500}>
            <Link to="/">
              <motion.div initial={{ y: -250 }} animate={{ y: 0 }}>
                <S.NavbarLogo src={logo} alt="logo" />
              </motion.div>
            </Link>
          </LinkScroll>
        </a>
        <S.NavbarContent>
          <motion.ul initial={{ y: -250 }} animate={{ y: 0 }}>
            <NavbarLink top="homePageTop" link="/" name="About" />
            <NavbarLink top="teamPageTop" link="/team" name="Team" />
            <NavbarLink
              top="projectsPageTop"
              link="/projects"
              name="Projects"
            />
            <NavbarLink top="applyPageTop" link="/apply" name="Apply" />
            <NavbarLink top="docsPageTop" link="/resources" name="Resources" />
          </motion.ul>
        </S.NavbarContent>
        <S.Navbar_NavToggle_Label htmlFor="navbar__nav-toggle">
          <span></span>
        </S.Navbar_NavToggle_Label>
      </S.Navbar>
      <S.NavbarPlaceholder />
    </S.NavbarContainer>
  );
};
export default Header;
