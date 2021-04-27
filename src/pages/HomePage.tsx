import React, {useState} from 'react'
// Images
import tsu_logo from "images/tech-start-logo-white.png";
import temp from "images/temp.jpg";
import temp1 from "images/temp.png";
import sponsorLogoHunterHub from "images/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsor-logo-arcurve.png";
// CSS
import "./HomePage.css";
// React Components
import FeaturedProject from "components/FeaturedProject";
import FeaturedSection from "components/FeaturedSection";
import SponsorLogo from "components/SponsorLogo";
import TeamSection from "components/TeamSection/TeamSection";
import NumberStat from "components/NumberStat";
import Divider from "components/Divider";
import Particle from "components/Particles";


function HomePage() {
  // const [cursorY, setCursorY] = useState()
  // const [cursorX, setCursorX] = useState()
  
  // window.addEventListener("mousemove", (e:any) => {
  // setCursorX(e.clientX);
  // setCursorY(e.clientY);
  // })
  //   var mouse = document.getElementById("cursor");
    
  //   var center = document.getElementById("mouseChange");
  //   var mouse2 = document.getElementById("cursor2");
  //   var mouse3 = document.getElementById("cursor3");
  
  //   if (center != null ){
  //   center.addEventListener('mouseover', () => 
  //   mouse?.setAttribute("style", "display:none"))

  //   center.addEventListener('mouseleave', () => 
  //   mouse?.setAttribute("style", "opacity:1"))

  //   center.addEventListener('mouseover', () => 
  //   mouse2?.setAttribute("style", "display:none"))

  //   center.addEventListener('mouseleave', () => 
  //   mouse2?.setAttribute("style", "opacity:1"))

  //   center.addEventListener('mouseover', () => 
  //   mouse3?.setAttribute("style", "display:none", ))

  //   center.addEventListener('mouseleave', () => 
  //   mouse3?.setAttribute("style", "opacity:1"))
  
  //   }


  return (
    <div className="homePage">
      {/* <div id="cursor"
      style ={{
        left:cursorX +'px',
        top:cursorY+'px'
      }}></div>
      <div id="cursor2"
      style ={{
        left:cursorX +'px',
        top:cursorY+'px'
      }}></div>
      <div id="cursor3"
      style ={{
        left:cursorX +'px',
        top:cursorY+'px'
      }}></div> */}
       <div id="mouseChange">
      <header className="homePage__hero" ><div className="particles"><Particle /></div>
      

      

      
    
      
        <div>
          <div className="homePage__logoContainer">
          <img className="homePage__logo" src={tsu_logo}></img></div>
          <p className="homePage__headerSubtitle">
            a tech club for dreamers and doers 
          </p>
        </div>
        
      </header>
      </div>
      <section className="homePage__aboutUs">
        
      
        <div className="homePage__container">
        
          <h1 className="chonkyHeading">We're the innovators on campus.</h1>
          <Divider />
          <p className="regularText">
            We're a software club at the University of Calgary. Through multidisciplinary teams, we take on interesting problems and use technology to solve them.
            Every semester, our teams combine software, design, and strategy to complete awesome projects.
          </p>
          <p className="regularText">
            At Tech Start, our members learn new technologies, gain experience with professional development tools and methodologies, and master the art of collaboration.
            We're also the top spot on campus to meet fellow tech enthusiasts, aspiring entrepreneurs, and innovators. 
          </p>
          {/* <a
            href="https://linktr.ee/techstartuofc"
            target="blank"
          >
            <button className="homePage__btn">Visit our Linktree</button>
          </a> */}
          <div className="homePage__numberContainer">
            <NumberStat number={4} stat="projects so far"/>
            <NumberStat number={32} stat="members so far"/>
            <NumberStat number={93} extra={"%"} stat="enjoyed their involvement"/>
            </div>
            <div className="homePage__applyButtonBox">
            <div className="homePage__applyButton">
          <div className="homePage__applyButtonArrow"> ˃˃ </div>
          <div className="homePage__applyButtonText"> theTeam.join()</div>
          </div></div>
        </div>
      </section>
      <section className="homePage__featuredProjects">
        <div className="homePage__container">
          <h2 className="homePage__containerTitle">Featured projects</h2>
          <div className="homePage__split">
            <FeaturedProject
              projectLink="#"
              projectImage={temp}
              projectName="Project1"
              teamName="Team1"
            />
            <FeaturedProject
              projectLink="#"
              projectImage={temp}
              projectName="Project2"
              teamName="Team2"
            />
            <FeaturedProject
              projectLink="#"
              projectImage={temp}
              projectName="Project3"
              teamName="Team3"
            />
          </div>
          <div>
            <a href="#">
              <button className="homePage__btn">View All Projects</button>
            </a>
          </div>
        </div>
      </section>

      <section className="homePage__ourSections">
        <div className="homePage__container">
          <FeaturedSection
            className="homePage__meetTheTeam"
            sectionImage={temp1}
            sectionTitle="Meet the Team"
            sectionDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam architecto veritatis!"
            sectionLink="#"
          />
          <FeaturedSection
            className="homePage__ourEvents"
            sectionImage={temp1}
            sectionTitle="Our Events"
            sectionDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam architecto veritatis!"
            sectionLink="#"
          />
          <FeaturedSection
            className="homePage__getInvolved"
            sectionImage={temp1}
            sectionTitle="Get Involved"
            sectionDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam architecto veritatis!"
            sectionLink="#"
          />
        </div>
      </section>

      <section className="homePage__ourSponsors">
        <div className="homePage__container">
          <h2 className="homePage__containerTitle">Sponsors</h2>
          <div className="homePage__split">
            <SponsorLogo sponsorLink="https://www.arcurve.com/" sponsorImage={sponsorLogoArcurve} />
            <SponsorLogo sponsorLink="https://www.ucalgary.ca/hunter-hub" sponsorImage={sponsorLogoHunterHub} />
          </div>
          <div>
            <a href="#" id="homePage__sponsorPackage">
              Interested in sponsoring us? Check out our sponsorship package.
            </a>
          </div>
        </div>
      </section>

      <TeamSection />

    </div>
  );
        };

export default HomePage;
