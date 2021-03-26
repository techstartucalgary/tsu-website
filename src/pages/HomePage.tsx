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

function HomePage() {
  return (
    <div className="homePage">
      <header className="homePage__hero">
        <div className="homePage__container">
          <img className="homePage__logo" src={tsu_logo}></img>
          <p className="homePage__headerSubtitle">
            a tech club for dreamers and doers 
          </p>
        </div>
      </header>

      <section className="homePage__aboutUs">
        <div className="homePage__container">
          <h1 className="homePage__sectionHeader homePage__sectionHeader-dark">We're the innovators on campus.</h1>
          <img src="https://assets.website-files.com/5a1ef3832756760001d9f37c/5f3a692c4d04ca779e7ede72_gradient-devider.svg" alt="gradient divider" className="homePage__divider"></img>
          <p className="homePage__text">
            We're a software club at the University of Calgary. Through multidisciplinary teams, we take on interesting problems and use technology to solve them.
            Every semester, our teams combine software, design, and strategy to complete awesome projects.
          </p>
          <p className="homePage__text">
            At Tech Start, our members learn new technologies, gain experience with professional development tools and methodologies, and master the art of collaboration.
            We're also the top spot on campus to meet fellow tech enthusiasts, aspiring entrepreneurs, and innovators. 
          </p>
          {/* <div data-w-id="b8e77f18-7153-faaa-5f4b-8a74f7293c0e" data-animation-type="lottie" 
          data-src="https://assets.website-files.com/5a1ef3832756760001d9f37c/5f5601de199d9b82fbbe55fb_data-blob-1.json" 
          data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg" data-default-duration="7.007006721605778" data-duration="0" 
          data-ix2-initial-state="0" className="side-lootie"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 450" width="250" height="450" 
          preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_12"><rect width="250" height="450" x="0" y="0"></rect>
          </clipPath><linearGradient id="__lottie_element_16" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="35" y1="23" x2="-97" y2="0">
            <stop offset="0%" stop-color="rgb(95,193,111)"></stop><stop offset="50%" stop-color="rgb(84,170,155)"></stop><stop offset="100%" 
            stop-color="rgb(74,146,199)"></stop></linearGradient><linearGradient id="__lottie_element_17" spreadMethod="pad" 
            gradientUnits="userSpaceOnUse" x1="35" y1="23" x2="-97" y2="0"><stop offset="0%" stop-color="rgb(95,193,111)"></stop>
            <stop offset="50%" stop-color="rgb(84,170,155)"></stop><stop offset="100%" stop-color="rgb(74,146,199)"></stop></linearGradient>
            <linearGradient id="__lottie_element_18" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="35" y1="23" x2="-97" y2="0">
              <stop offset="0%" stop-color="rgb(95,193,111)"></stop><stop offset="50%" stop-color="rgb(84,170,155)"></stop><stop offset="100%" stop-color="rgb(74,146,199)">
                </stop></linearGradient></defs><g clip-path="url(#__lottie_element_12)"><g transform="matrix(1,0,0,1,0,25)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,95.68599700927734,166.91000366210938)"><path fill="url(#__lottie_element_16)" fill-opacity="1" 
                  d=" M-95.68599700927734,-166.91000366210938 C-78.72052764892578,-121.2431640625 -72.62435913085938,-98.32591247558594 -27.135120391845703,-63.19522476196289 C23.308820724487305,-24.031713485717773 -41.147315979003906,30.174745559692383 -63.37211990356445,58.568912506103516 C-100.50225830078125,107.6448745727539 26.061609268188477,102.62049865722656 -95.68599700927734,227.40968322753906 C-95.68599700927734,227.40968322753906 -95.68599700927734,-166.91000366210938 -95.68599700927734,-166.91000366210938z">
                    </path></g><g opacity="1" transform="matrix(1,0,0,1,187.80499267578125,277.10699462890625)">
                      <path fill="url(#__lottie_element_17)" fill-opacity="1" d=" M-24.434139251708984,-26.484140396118164 C1.8252263069152832,-14.528971672058105 2.444028854370117,-42.114295959472656 -8.208959579467773,-47.6163215637207 C-18.864959716796875,-53.119319915771484 -40.664241790771484,-33.871681213378906 -24.434139251708984,-26.484140396118164z"></path>
                      </g><g opacity="1" transform="matrix(1,0,0,1,148.42799377441406,360.4460144042969)"><path fill="url(#__lottie_element_18)" fill-opacity="1" d=" M-10.104273796081543,-70.55227661132812 C-21.219696044921875,-83.35604095458984 -42.766117095947266,-65.80741882324219 -51.68011474609375,-55.34193801879883 C-67.78157806396484,-33.511329650878906 -78.66436004638672,-16.847761154174805 -71.15010833740234,-8.119797706604004 C-50.4122200012207,15.890646934509277 -4.074301242828369,9.946226119995117 -16.150583267211914,-19.606727600097656 C-26.066162109375,-44.036293029785156 9.603071212768555,-47.8560676574707 -10.104273796081543,-70.55227661132812z"></path></g></g></g></svg></div> */}
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
}

export default HomePage;
