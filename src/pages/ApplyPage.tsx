import React, { useState } from "react";
import "./ApplyPage.css";
import gallery1 from "images/calgary.jpg";
import gallery2 from "images/banana.jpg";
import gallery3 from "images/temp.jpg";
import projectExample from "images/teamphoto-techstartwebteam.png";
import joinProject from "images/team.png";
import ApplySection from "components/ApplySection";
import ApplyFAQSection from "components/ApplyFAQSection";
import Accordion from "../components/Apply/Accordion";
import Blobbie from "components/Blobbie";
import Divider from "components/Divider";

function ApplyPage() {
  const [active, setActive] = useState("");
  return (
    <div className="applyPage">
      <div className="applyPage__waves applyPage__waves1"></div>
      <div className="applyPage__waves applyPage__waves2"></div>
      <header className="applyPage__showcase" id="applyPageTop">
        <div className="applyPage__spacing" data-aos="zoom-out-down"></div>
        <div className="applyPage__primary-wrapper">
          <h1 className="applyPage__primary-title">APPLY</h1>
          <p className="applyPage__primary-description">
            Join a dynamic community dedicated to advancing software development
            and entrepreneurship at the University of Calgary.
          </p>
        </div>
      </header>
      <div className="applyPage__introContainer">
        <div className="applyPage__intro">
          <h1 className="chonkyHeading chonkyHeading--dynamic chonkyHeading--lessMargin">
            What We Do
          </h1>
          <Divider />
          <Blobbie
            id={8}
            width={400}
            transform="translate(-70%, -30%)"
            edge={true}
          />
          <div className="applyPage__introContents" data-aos="fade-down">
            <h2>
              Tech Start is a club based at the University of Calgary, directed
              at software development and entrepreneurial thinking. This is
              where innovation meets collaboration, and amazing projects are
              brought into creation by student teams! Join an open community
              that fuels learning and creativity, fellowship and meaningful
              relationships, and experience and professional development.
            </h2>
            <a href="http://eepurl.com/hnusUP" target="_blank">
              <button className="applyPage__btn">
                Sign up to our mailing list
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="applyPage__container applyPage__projectIntroContainer">
        <img
          className="applyPage__projectIntroImg"
          src={joinProject}
          alt=""
          data-aos="fade-right"
        />
        <div className="applyPage__projectIntro">
          <h1 className="chonkyHeading chonkyHeading--dynamic chonkyHeading--white">
            Project FAQs
          </h1>
          <Accordion
            title="What is a Tech Start project?"
            active={active}
            setActive={setActive}
            description="Every semester, our members form teams that gather together to
                  brainstorm a project, and then work on that idea collaboratively 
                  with 6-9 other creators over the semester. During this time the
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
              As a strategist, you will focus on the business side of the
              project, working alongside the Executive VP Strategy to learn
              and develop a business deliverable (i.e. a business plan, a business 
              canvas, a short report, a pitch, any combination of those, etc.) at 
              the end of the term. Ideally, this would be something that is tangible 
              and you can save for your portfolio to share with future employers, 
              internships, and co-op placements.
              </br></br>
              <strong>Project Designer</strong></br>
              As a designer at Tech Start, you will be in charge of making the
              attractive, creative interfaces that provide great user experiences.
              This role requires creativity, a practical and user-friendly perspective, 
              and an eye for art! This usually involves planning out the design and 
              working on the front-end for the majority of projects.
              </br></br>
              <strong>Project Manager</strong> (separate application)</br>
              As a manager, you will be in charge of organizing, coordinating, and 
              leading the team to create complex projects! This involves leading
              weekly team meetings, leading the team vision, and guiding the project process. 
              During the process, you will share and earn technical and professional 
              experience!"
          />
          <Accordion
            title="Why join a project?"
            active={active}
            setActive={setActive}
            description="
            You will get
            <li>to learn and exercise professional development and design practices </li>
            <li>to experience the full cycle of developing a project from nothing </li>
            <li>to experience and practice development, business, or design skills </li>
            <li>to work collaboratively on a project and learn from those around you</li>
            <li>to expand your portfolio by working on a team project</li>
            <li>to make friendships and connections with UCalgary's best  </li>"
          />
          <Accordion
            title="What is required to take part in a project?"
            active={active}
            setActive={setActive}
            description="
                    A passion for learning and experimenting, and a willingness to get involved! We welcome everyone of all skill levels, whether you are a complete
              beginner just starting out or if you’ve done several internships and have
              a portfolio of awesome projects."
          />
          <Accordion
            title="What commitments are expected of project members?"
            active={active}
            setActive={setActive}
            description="
            <li>Team members must be able to attend the majority of our weekly dev nights, which are held on Wednesdays from 5:30-8:30PM.</li>
            <li>Beyond the dev nights, you should expect to contribute a minimum of 1-2 hours of additional work per week</li>
            <li>Additional team meetings may be arranged by your Project Manager when necessary</li>
            "
          />
        </div>
        <div className="applyPage__container applyPage__projectExample">
          <div className="applyPage__projectExampleText">
            <h1>
              Join a project to make new friends, gain new skills, and
              supercharge your portfolio!
            </h1>
          </div>
          <img src={projectExample} alt="The Tech Start website team" />
        </div>
        <Blobbie
          id={2}
          width={130}
          transform="translate(-30%, 70%)"
          edge={false}
        />
      </div>

      <div className="applyPage__container applyPage__applicationContainer">
        <div className="applyPage__application">
          <Blobbie
            id={2}
            width={190}
            transform="translate(clamp(90vw, calc(5vw + 1rem), 40vw), 20%)"
            edge={false}
          />
          <Blobbie
            id={2}
            width={50}
            transform="translate(clamp(-70vw, calc(5vw + 1rem), 40vw), -15%)"
            edge={false}
          />
          <h1 className="chonkyHeading chonkyHeading--dynamic chonkyHeading--lessMargin">
            Applications
          </h1>
          <Divider />
          <ul className="applyPage__applicationUL">
            <ApplySection
              term="1 semester"
              role="Project Member"
              description="Work and grow as a developer, business strategist, or designer.
                  Collaborate with team members on various platforms to build an exciting project."
              status="closed"
              applicationLink="https://forms.gle/3BD9dQ3TjcXzEqZN9"
            />

            <ApplySection
              term="1 semester"
              role="Project Manager"
              description="Manage a project for a semester and lead a team of 6-9
                    project members to create complex projects."
              status="open"
              applicationLink="https://forms.gle/bFGzAFD1QWdCavGr5"
            />

            <ApplySection
              term="1 academic year"
              role="Executive Team"
              description="Work behind the scenes to organize project teams, run
                  workshops and events, and grow our club culture. Be a visionary that helps this club fulfill its goals!"
              status="closed"
              applicationLink="https://forms.gle/PQMbV5SWQfNe46GAA"
            />
          </ul>
        </div>
      </div>
      <div className="applyPage__FAQ">
        <h1 className="chonkyHeading chonkyHeading--dynamic chonkyHeading--lessMargin chonkyHeading--white">
          FAQ
        </h1>
        <Divider />
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
