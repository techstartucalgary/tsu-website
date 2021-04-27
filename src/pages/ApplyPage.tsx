import React, { useState } from "react";
import "./ApplyPage.css";
import gallery1 from "images/calgary.jpg";
import gallery2 from "images/banana.jpg";
import gallery3 from "images/temp.jpg";
import gallery4 from "images/funkystudent.jpg";
import gallery5 from "images/faketeam.jpg";
import ApplySection from "components/ApplySection";
import ApplyFAQSection from "components/ApplyFAQSection";
import Accordion from "../components/Apply/Accordion";

//import AOS from "../../node_modules/aos";
//import "aos/dist/aos.css";

function ApplyPage() {
  const [active, setActive] = useState("");
  return (
    <div className="applyPage">
      <div className="applyPage__waves applyPage__waves1"></div>
      <div className="applyPage__waves applyPage__waves2"></div>
      <header className="applyPage__showcase">
        <h1 className="applyPage__primary-title">APPLY</h1>
        <p className="applyPage__primary-description">
          Join a high-energy, dynamic community dedicated to creating an
          entreprenuerial and software environment at the University of Calgary.
        </p>
      </header>
      <div className="applyPage__introContainer">
        <div className="applyPage__intro">
          <h1 className="applyPage__SectionTitle">What We Do</h1>
          <div className="applyPage__introImg"></div>
          <div className="applyPage__introContents" data-aos="fade-down">
            <h2>
              Tech Start is a UofC student student-run software engineering
              design team devoted to building software projects in a
              collaborative and professional environment. Our primary objective
              is to be the best space at UofC for students to find a welcoming
              community, build projects in a team setting, gain experience with
              professional tools and principles, and share their knowledge with
              others.
            </h2>
            <button className="applyPage__btn">Join the Community</button>
          </div>
        </div>
      </div>
      <div className="applyPage__container applyPage__projectIntroContainer">
        <img
          className="applyPage__projectIntroImg"
          src={gallery5}
          alt=""
          data-aos="fade-right"
        />
        <div className="applyPage__projectIntro">
          <h1 className="applyPage__SectionTitle">Projects</h1>
          <Accordion
            title="What is a Tech Start project?"
            active={active}
            setActive={setActive}
            description="Every semester, our members form teams that gather together to
                  brainstorm a project, and then work on that idea
                  collaboratively over the semester. During this time the
                  projects evolve and shift, and our members get to experience
                  the full lifecycle of bringing a complex project to life. Each
                  team is lead by an experienced project manager who provides the
                  expertise needed to execute on the team’s vision. We are also fortunate 
                  enough to be supported by a number of companies who provide us with
                  the resources necessary to build our projects and run events
                  and workshops."
          />
          <Accordion
            title="What roles are there in a project?"
            active={active}
            setActive={setActive}
            description="<strong>Project Software Developer</strong></br>
              As a developer, you will learn to architect and build awesome
              projects and participate in team events. You want
              to collaborate with a team to build awesome software and learn
              professional development practices. Work together with
              other developers on different platforms, collaborating
              cross-functionally to build a project that you and your teammates
              will decide on at the start of the semester.
              </br></br>
              <strong>Business Strategist</strong></br>
              As a developer, you will learn to architect and build awesome
              projects, and participate in team events and lunch trips. You want
              to collaborate with a team to build awesome software and learn
              professional development practices. Work collaboratively with
              other developers on different platforms, collaborating
              cross-functionally to build a project that you and your teammates
              will decide on at the start of the semester.
              </br></br>
              <strong>Project Designer</strong></br>
              As a designer at Tech Start, you will be in charge of making 
              attractive, creative interfaces that provide great user experiences.
              </br></br>
              <strong>Project Manager</strong> (separate application)</br>
              As a manager, you will be in charge of take the opportunity to
              pass on and earn experience leading in a professional and
              experimental environment! Manage a project for a semester and lead
              a team of 6-9 developers to create complex projects! Build your
              portfolio, gain industry-like experience, and learn about the
              product life cycle from initial design to testing and deployment."
          />
          <Accordion
            title="Why join a project?"
            active={active}
            setActive={setActive}
            description="
            You will get
            <li>to learn and exercise professional development/design practices </li>
            <li>to experience the full cycle of developing a project from nothing </li>
            <li>to experience and practice development, business, or design skills </li>
            <li>to work collaboratively on a project and learn from those around you</li>
            <li>to expand your portfolio by working on a team project</li>
            <li>to make some meaningful relationships with the people from Tech Start </li>"
          />
          <Accordion
            title="What is required to take part in a project?"
            active={active}
            setActive={setActive}
            description="
                    A passion for learning and experimenting, and a willingness to participate
              actively! We welcome everyone of all skill levels, whether you are a complete
              beginner just starting out or if you’ve done several internships and have
              a portfolio of awesome projects."
          />
          <Accordion
            title="What are is the commitment of a project member?"
            active={active}
            setActive={setActive}
            description="
            <li>Weekly team meetings (1 hour per week) and occasional club meetings </li>
            <li>Around 4 hours per week working on tasks in and outside of web-development nights </li>"
          />
        </div>
      </div>
      <div className="applyPage__container applyPage__applicationContainer">
        <div className="applyPage__application">
          <h1 className="applyPage__SectionTitle">Applications</h1>
          <div className="applyPage__applicationImg"></div>
          <ul className="applyPage__applicationUL">
            <ApplySection
              term="1 semester"
              role="Project Member"
              description="Work and grow as a developer, business strategist, or designer.
                  Collaborate with team members on various platforms to build an exciting project."
              status="closed"
              applicationLink="#"
            />
            <ApplySection
              term="1 semester"
              role="Project Manager"
              description="Manage a project for a semester and lead a team of 6-9
                    project members to create complex projects."
              status="open"
              applicationLink="#"
            />
            <ApplySection
              term="1 academic year"
              role="Executive Team"
              description="Work behind the scenes to organize project teams, run
                  workshops and events, and more. Lead and grow the club vision
                  and culture."
              status="closed"
              applicationLink="#"
            />
          </ul>
        </div>
      </div>
      <div className="applyPage__FAQ">
        <h1 className="applyPage__SectionTitle">FAQ</h1>
        <div className="applyPage__FAQImg"></div>
        <div className="applyPage__FAQContents">
          <ApplyFAQSection
            question="What do the Project Managers do?"
            answer="Consider applying to be a Project Manager! Take the opportunity to
              pass on and earn experience leading in a professional and
              experimental environment! Manage a project for a semester and lead
              a team of 6-9 developers to create complex projects! Build your
              portfolio, gain industry-like experience, and learn about the
              product life cycle from initial design to testing and deployment."
          />
          <ApplyFAQSection
            question="What does the Executive Team do?"
            answer="The Executive Team runs behind the scenes to organize and maintain
              project teams, run workshops and events, and much more. There are
              many portfolios on the team, each essential to the carrying out
              the entrepreneurial and inventive vision for the community. More
              information on unique roles is in our application!"
          />
        </div>
      </div>
    </div>
  );
}

export default ApplyPage;
