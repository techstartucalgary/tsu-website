import "./GuidesSection.css";
import imgDjango from "images/guides/django.png";
import imgGit from "images/guides/git.png";
import imgWebDev from "images/guides/webdev.png";
import imgReact from "images/guides/react.png";
import imgApi from "images/guides/api.png";
import { GlobalStyles } from "types/Themes.js";
import Guide from "./Guide";

const GuidesSection = () => (
  <section className="techGuidesSection">
    <GlobalStyles />

    <Guide
      guideName="Django Guide"
      link="https://docs.techstartucalgary.com/guides/Django_Guide/index.html"
      image={imgDjango}
      description="Learn Django, a python-based web framework for building backends, APIs, multi-page applications, and more!"
    />

    <Guide
      guideName="Git Guide"
      link="https://docs.techstartucalgary.com/guides/Git_Guide/index.html"
      image={imgGit}
      description="Git is a fundamental tool for source control and collaborative development. This guide will help you learn and master git and GitHub workflows!"
    />  

    <Guide
      guideName="Web Dev Guide"
      link="https://docs.techstartucalgary.com/guides/Web_Dev_Guide/index.html"
      image={imgWebDev}
      description="Learn the fundamentals of web development, with free resources and advice for mastering HTML, CSS, JS, and more!"
    />

    <Guide
      guideName="React Guide"
      link="https://docs.techstartucalgary.com/guides/React_Guide/index.html"
      image={imgReact}
      description="Learn the essentials of React, hooks, APIs, Redux, and React Native!"
    />

    <Guide
      guideName="API Guide"
      link="https://docs.techstartucalgary.com/guides/GraphQL_API_Guide/index.html"
      image={imgApi}
      description="Learn about types of APIs, Rest APIs, Postman, and GraphQL!"
    />
  </section>
);

export default GuidesSection;
