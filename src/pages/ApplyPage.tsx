import React from "react";
import "./ApplyPage.css";
import wave from "images/wave.png";
import ApplySection from "components/ApplySection";
import ApplyFAQSection from "components/ApplyFAQSection";

function ApplyPage() {
  return (
    <div className="applyPage">
      <div className="applyPage__waves applyPage__waves1"></div>
      <div className="applyPage__waves applyPage__waves2"></div>
      <header className="applyPage__showcase">
        <div className="applyPage__spacing" data-aos="zoom-out-down"></div>
        <h1 className="applyPage__primary-title">APPLY</h1>
        <p className="applyPage__primary-description">
          Join a high-energy, dynamic team dedicated to creating an
          entreprenuerial and software community at the University of Calgary.
        </p>
      </header>
      <div className="applyPage__container applyPage__applicationContainer">
        <div className="applyPage__application">
          <h1 className="applyPage__SectionTitle">Applications</h1>
          <div className="applyPage__applicationImg"></div>
          <ul className="applyPage__applicationUL">
            <ApplySection
              term="1 academic year"
              role="Executive Team"
              description="Work behind the scenes to organize project teams, run
                  workshops and events, and more. Lead and grow the club vision
                  and culture."
              applicationLink="#"
            />
            <ApplySection
              term="1 semester"
              role="Project Manager Team"
              description="Manage a project for a semester and lead a team of 6-9
                  developers to create complex projects."
              applicationLink="#"
            />
            <ApplySection
              term="1 semester"
              role="Project Developer"
              description="Work and grow with other developers on different platforms,
                  collaborating cross-functionally to build an exciting project."
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
            question="What is Tech Start?"
            answer="Tech Start is a UofC student student-run software engineering
              design team devoted to building software projects in a
              collaborative and professional environment. Our primary objective
              is to be the best space at UofC for students to find a welcoming
              community, build projects in a team setting, gain experience with
              professional tools and principles, and share their knowledge with
              others. 
              Every few semesters, our members form teams that gather together
              to brainstorm a project, and then work on that idea for anywhere
              between a single semester to over a year. During this time the
              projects evolve and shift, and our members get to experience the
              full lifecycle of bringing a complex project to life. Each team is
              lead by an experienced tech lead who provides the expertise needed
              to execute on the team’s vision. Tech Start also has mentors for
              each platform to help you learn to solve unique problems on your
              platform. We are also fortunate enough to be supported by a number
              of companies who provide us with the resources necessary to build
              our projects and run events and workshops."
          />
          <ApplyFAQSection
            question="What does the Executive Team do?"
            answer="The Executive Team runs behind the scenes to organize and maintain
              project teams, run workshops and events, and much more. There are
              many portfolios on the team, each essential to the carrying out
              the entrepreneurial and inventive vision for the community. More
              information on unique roles is in our application!"
          />
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
            question="What do the Project developers do?"
            answer="As a developer, you will learn to architect and build awesome
              projects, and participate in team events and lunch trips. You want
              to collaborate with a team to build awesome software and learn
              professional development practices. Work collaboratively with
              other developers on different platforms, collaborating
              cross-functionally to build a project that you and your teammates
              will decide on at the start of the semester."
          />
        </div>
      </div>
    </div>
  );
}

export default ApplyPage;
