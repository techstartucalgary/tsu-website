import React,{useState} from 'react';
import './DocsPage.css';
import { ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles } from 'types/Themes.js'
import Emoji from 'components/Emoji'
import docsPage__logo from 'images/tech-start-logo-white.png'
import { faShower } from '@fortawesome/free-solid-svg-icons';

function DocsPage(){
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light'); };
  
      
  return (
    <ThemeProvider theme = { theme === 'light' ? lightTheme : darkTheme}>
      
    <div className="docsPage">
      
      <header className="docsPage__header">
      <GlobalStyles />
      <div className="docsPage__sections" id="DocsPageSection1">
      <span className = "switch">
      <span className="switch1"> <span style={ theme === 'light' ? {color:'#ffc045'} : {color:'grey'}}>☀</span></span>
      <div className="switch2"> <span style={ theme === 'light' ? {color:'grey'} : {color:'white'}}>☾</span></div>
     <label className = "switch__label">
        <input type ="checkbox" onClick={() => themeToggler()}></input>
        <span className="switch__span"></span>
    </label>
    
    </span>
        
        <h2 className="docsPage__header2">
        
          <ul>
          <li><a href ="" ><Emoji symbol=" 📚" />Resources</a></li>
          <li><a href =""><Emoji symbol="📓" />Handbook</a></li>
          <li><a href =""> <Emoji symbol="📎" />Quick Links</a></li>
          </ul>
          </h2>
        <img className="docsPage__logo" src={docsPage__logo}></img>
        <h3 className="docsPage__h3">techstart/docs</h3>
        <div className="docsPage__Search"> 
        <input type ="text" placeholder="Search..."/>
        </div> </div>
        <h4 className='docsPage__h4'><Emoji symbol="💻" /> The official TechStart UCalgary knowledge base</h4>
        
        <p className="docsPage__p">
        TechStart UCalgary Documentation gathers advice, resources and best practices to help members find information they need to learn from our work. Please help us make it better!
        </p>
        
        <ul className="docsPage__ol">
          <button type="button">Contents</button>
        <li className="docsPage__Contents"><Emoji symbol="📓" /> Handbook
          <p className="docsPage__p2">The <a href="" className="docsPage__links">Club Handbook</a> contains all the documents outlining our mission, how we are run, resources about managing projects, and more!</p>
        </li>
        <li className="docsPage__Contents"><Emoji symbol="🔖" /> Resources
          <p className="docsPage__p2">The <a href="" className="docsPage__links">Resources</a> page provides helpful guides, tools, and resources on learning!</p>
        </li>
        </ul>
        <ul className="docsPage__ol">
        <button type="button">Get In Touch</button>
        <li className="docsPage__Contents"><Emoji symbol="📤" /> Connect With Us
          <p className="docsPage__p2">Please feel free to reach out if you have any questions about Tech Start or the documentation in this website! Get in touch via our <a href="" className="docsPage__links">Facebook</a>,<a href="" className="docsPage__links"> Instagram</a> or <a href="" className="docsPage__links">Discord</a> pages</p>
        </li>
        </ul>
        <ul className="docsPage__ol">
        <button type="button">Dark mode</button>
        <li className="docsPage__Contents"><Emoji symbol="🌗" /> Enable Light Mode
        <p className="docsPage__p2">Hit the icon in the navigation bar to toggle light mode!</p>
        </li>
        </ul>
        </header>
    </div>
    </ThemeProvider>
    );
  }
  

export default DocsPage;