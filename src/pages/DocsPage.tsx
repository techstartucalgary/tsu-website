import React, { useState } from 'react';
import './DocsPage.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from 'types/Themes.js'
import Emoji from 'components/Emoji'
import docsPage__logoblack from 'images/tech-start-logo-black.png'
import docsPage__logowhite from 'images/tech-start-logo-white.png'
import { faShower } from '@fortawesome/free-solid-svg-icons';
import GuidesSection from "components/DocsPageSections/GuidesSection"
import Branding from "components/DocsPageSections/Branding"
import ReachOut from "components/DocsPageSections/ReachOut"
import { Link as LinkScroll } from "react-scroll";

function DocsPage() {
  const logo = { docsPage__logowhite, docsPage__logoblack }
  const [theme, setTheme] = useState('dark');
  const [docsPage__logo, setLogo] = useState(logo.docsPage__logowhite)

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    theme === 'light' ? setLogo(logo.docsPage__logowhite) : setLogo(docsPage__logoblack)
  };


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <div className="docsPage">

        <header className="docsPage__header">

          <GlobalStyles />

          <div className="docsPage__sections" id="docsPageTop">

            <span className="switch">
              <span className="switchSun"> <span style={theme === 'light' ? { color: '#ffc045' } : { color: 'grey' }}>☀</span></span>
              <div className="switchMoon"> <span style={theme === 'light' ? { color: 'grey' } : { color: 'white' }}>☾</span></div>
              <label className="switch__label">
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
                  duration={500}><li><a href="#" ><Emoji symbol="📚 " />Tech Guides</a></li></LinkScroll>
                <LinkScroll

                  to="docsPage__brandingSection"
                  spy={true}
                  offset={-95}
                  duration={500}><li><a href="#"><Emoji symbol="📓 " />Branding</a></li></LinkScroll>
                <LinkScroll

                  to="docsPage__reachOutSection"
                  spy={true}
                  offset={-95}
                  duration={500}><li><a href="#"> <Emoji symbol="📤 " />Reach Out</a></li></LinkScroll>
              </ul>
            </h2>

            <img className="docsPage__logo" src={docsPage__logo}></img>

            <h3 className="docsPage__title">techstart/docs</h3>

            {/*<div className="docsPage__search">
              <input type="text" placeholder="Search..." />
  </div>*/}

          </div>
          <h4 className='docsPage__intro'><Emoji symbol="💻" /> The official TechStart UCalgary knowledge base</h4>

          <p className="docsPage__description">
            TechStart UCalgary Documentation gathers advice, resources and best practices to help members find information they need to learn from our work. Please help us make it better!
          </p>

          <div className="docsPage__content">
            <ul>
              <li id="docsPage__techGuidesSection"><Emoji symbol="📚 " />Tech Guides</li>
              <p className="docsPage__sectionDescription">This section documents Tech Start's super awesome mega guides :)</p>
              <GuidesSection />
              <li id="docsPage__brandingSection"><Emoji symbol="📓 " />Branding</li>
              <p className="docsPage__sectionDescription">This section documents Tech Start's branding guidelines:</p>
              <Branding />
              <li id="docsPage__reachOutSection"><Emoji symbol="📤 " />Reach Out</li>
              <p className="docsPage__sectionDescription">How to reach out to us:</p>
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