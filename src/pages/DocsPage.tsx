import React from 'react';
import './DocsPage.css';

function DocsPage(){
    const Emoji = (props:any) => (
      <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
      >
        {props.symbol}
      </span>
    )
    return (
      <div className="docsPage">
        <header className="docsPage__header">
          <h1 className="docsPage__h1"><Emoji symbol="💡" /> TechStart UCalgary Documentation</h1>
          <h2 className="docsPage__header2"><a href ="" className="docsPage__h2"><Emoji symbol="📚" /> Resources    </a><a href ="" className="docsPage__h2"><Emoji symbol="📓" />   Handbook    </a><a href ="" className="docsPage__h2"> <Emoji symbol="📎" />   Quick Links   </a> <Emoji symbol="⚙️" /></h2>
          <h3 className="docsPage__h3">techstart/docs</h3>
          <div className="docsPage__Search"> <input type ="text" placeholder="Search..."/> </div>
          <h4 className="docsPage__h4"><Emoji symbol="💻" /> The official TechStart UCalgary knowledge base</h4>
          <p className="docsPage__p">
          TechStart UCalgary Documentation gathers advice, resources and best practices to help members find information they need to learn from our work. Please help us make it better!
          </p>
          
          <ul className="docsPage__ol">Contents
          <li className="docsPage__Hanbook"><Emoji symbol="📓" /> Handbook
            <p>The <a href="" className="docsPage__links">Club Handbook</a> contains all the documents outlining our mission, how we are run, resources about managing projects, and more!</p>
          </li>
          <li className="docsPage__Resources"><Emoji symbol="🔖" /> Resources
            <p>The <a href="" className="docsPage__links">Resources</a> page provides helpful guides, tools, and resources on learning!</p>
          </li>
          </ul>
          <ul className="docsPage__ol2">Get In Touch
          <li className="docsPage__Hanbook"><Emoji symbol="📤" /> Connect With Us
            <p>Please feel free to reach out if you have any questions about Tech Start or the documentation in this website! Get in touch via our <a href="" className="docsPage__links">Facebook</a>,<a href="" className="docsPage__links"> Instagram</a> or <a href="" className="docsPage__links">Discord</a> pages</p>
          </li>
          </ul>
          <ul className="docsPage__DarkMode">Dark mode
          <li className="docsPage__DarkMode2"><Emoji symbol="🌗" /> 
          <p>Hit the gear icon in the navigation bar to toggle dark mode!</p>
          </li>
          </ul>
          <p> TechStart UCalgary is a student-run software engineering club, whose mission is to build software projects, explore tech entrepreneurship and help others learn.</p>
        </header>
      </div>
    );
  }
  

export default DocsPage;