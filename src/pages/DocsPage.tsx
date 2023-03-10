import { useState } from "react";
import "./DocsPage.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "types/Themes.js";
import Emoji from "components/Emoji";
import docsPage__logoblack from "images/tech-start-logo-black.png";
import docsPage__logowhite from "images/tech-start-logo-white.png";
import GuidesSection from "components/DocsPageSections/GuidesSection";
import { Link as LinkScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";

function DocsPage() {
  const logo = { docsPage__logowhite, docsPage__logoblack };
  const [theme, setTheme] = useState("dark");
  const [docsPage__logo, setLogo] = useState(logo.docsPage__logowhite);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? setLogo(logo.docsPage__logowhite)
      : setLogo(docsPage__logoblack);
  };

  function Branding() {
    return (
      <section>
        <ul className="sectionContent">
          <li>
            <Emoji symbol="👩🏽‍💻 " />
            Club Name: Refer to the club as "Tech Start UCalgary" or "Tech
            Start", but avoid the acronyms "TS" and "TSU".
          </li>
          <li>
            <Emoji symbol="🖥️ " />
            Logos: Want to use the Tech Start logo? You can download official
            versions from our Google Drive{" "}
            <a
              href="https://drive.google.com/drive/u/2/folders/1xYYzdgP9Asac6FP_omsDuCq0mEoaE8UY"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            ! Please note that you can download the logos, but not delete or
            alter them.
          </li>
          {/*<li><Emoji symbol="🔖 " />Styling Guide: You can find a more in-depth styling guide <a href="#" target="_blank">here</a>.</li> */}
        </ul>
      </section>
    );
  }

  function ReachOut() {
    return (
      <section>
        <ul className="sectionContent">
          <li>
            <Emoji symbol="💡 " />
            Website Suggestions: If you have a suggestion for our website,
            submit it to us as an Issue on our{" "}
            <a
              href="https://github.com/Tech-Start-UCalgary/tsu-website/issues"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository
            </a>
            .
          </li>
          <li>
            <Emoji symbol="📗 " />
            Guide Contributions: If you would like to contribute to our guides,
            you can reach out to us over{" "}
            <a
              href="https://discord.gg/Sxj5QrxRPk"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            , or leave a comment on the guide about minor changes.
          </li>
          <li>
            <Emoji symbol="📩 " />
            Other Suggestions: Please feel free to reach out to us over other
            concerns over one of the public channels in our{" "}
            <a
              href="https://discord.gg/Sxj5QrxRPk"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            .
          </li>
        </ul>
      </section>
    );
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="docsPage">
        <header className="docsPage__header">
          <GlobalStyles />

          <div className="docsPage__sections" id="docsPageTop">
            <span className="switch">
              <label className="switch__label">
                {theme === "light" ? (
                  <FontAwesomeIcon icon={faMoon} className="faMoon" />
                ) : (
                  <FontAwesomeIcon icon={faSun} className="faSun" />
                )}

                <input type="checkbox" onClick={() => themeToggler()}></input>
                <span className="switch__span"></span>
              </label>
            </span>

            <h2 className="docsPage__links">
              <ul>
                <LinkScroll
                  to="docsPage__techGuidesSection"
                  spy={true}
                  offset={-95}
                  duration={500}
                >
                  <li>
                    <a href="#">
                      <Emoji symbol="📚 " />
                      Tech Guides
                    </a>
                  </li>
                </LinkScroll>
                <LinkScroll
                  to="docsPage__brandingSection"
                  spy={true}
                  offset={-95}
                  duration={500}
                >
                  <li>
                    <a href="#">
                      <Emoji symbol="📓 " />
                      Branding
                    </a>
                  </li>
                </LinkScroll>
                <LinkScroll
                  to="docsPage__reachOutSection"
                  spy={true}
                  offset={-95}
                  duration={500}
                >
                  <li>
                    <a href="#">
                      {" "}
                      <Emoji symbol="📤 " />
                      Reach Out
                    </a>
                  </li>
                </LinkScroll>
              </ul>
            </h2>

            <motion.img
              className="docsPage__logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={docsPage__logo}
            ></motion.img>

            {/* <h3 className="docsPage__title">techstart/docs</h3> */}

            {/*<div className="docsPage__search">
              <input type="text" placeholder="Search..." />
  </div>*/}
          </div>
          {/* <h4 className='docsPage__intro'><Emoji symbol="💻" /> The official TechStart UCalgary knowledge base</h4> */}

          <p className="docsPage__description">
            Information, guides, and resources for Tech Start UCalgary members
          </p>

          <div className="docsPage__content">
            <ul>
              <li id="docsPage__techGuidesSection">
                <Emoji symbol="📚 " />
                Tech Guides
              </li>
              <p className="docsPage__sectionDescription">
                We've created several guides to help you learn new tools,
                programming languages, and frameworks.
              </p>
              <GuidesSection />
              <p className="docsPage__sectionDescription">
                If you have minor fixes or suggestions for any of our guides,
                leave a comment on the corresponding Google Doc. If you're
                interested in contributing to our guides, reach out to our VP
                Development over Discord!
              </p>
              <li id="docsPage__brandingSection">
                <Emoji symbol="📓 " />
                Branding
              </li>
              <p className="docsPage__sectionDescription">
                Here are our branding guidelines for you to follow whenever you
                represent Tech Start UCalgary in writing or graphics:
              </p>
              <Branding />
              <li id="docsPage__reachOutSection">
                <Emoji symbol="📤 " />
                Reach Out
              </li>
              <p className="docsPage__sectionDescription">
                How to reach out to us:
              </p>
              <ReachOut />
              <div className="docsPage__break"></div>
            </ul>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default DocsPage;
