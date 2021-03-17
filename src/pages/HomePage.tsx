// Images
import tsu_logo from "images/logo_white_start.png";
import temp from "images/temp.jpg";
import temp1 from "images/temp.png";
import hunterHubLogo from "images/hunterhublogo.png";
import arcurveLogo from "images/arcurvelogo.png";
// CSS
import "./HomePage.css";
// React Components
import FeaturedProject from "components/FeaturedProject";
import FeaturedSection from "components/FeaturedSection";
import SponsorLogo from "components/SponsorLogo";
import TeamSection from "components/TeamSection/TeamSection";

function HomePage() {
  return (
    <div className="homePage">
      <header className="homePage__hero">
        <div className="homePage__container">
          <img className="homePage__logo" src={tsu_logo}></img>
          <p className="homePage__primaryTitle">
            Currently Under Construction.
          </p>
        </div>
      </header>

      <section className="homePage__aboutUs">
        <div className="homePage__container">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aperiam architecto veritatis labore! Numquam iusto sit culpa
            obcaecati perspiciatis illum laborum architecto facere laboriosam?
            Aperiam fuga a minima suscipit dignissimos!
          </p>
          <a
            href="https://linktr.ee/techstartuofc"
            target="blank"
          >
            <button className="homePage__btn">Visit our Linktree</button>
          </a>
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
            <SponsorLogo sponsorLink="#" sponsorImage={arcurveLogo} />
            <SponsorLogo sponsorLink="#" sponsorImage={hunterHubLogo} />
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
