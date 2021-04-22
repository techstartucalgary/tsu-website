// Images
import tsu_logo from "images/tech-start-logo-white.png";
import temp from "images/temp.jpg";
import temp1 from "images/temp.png";
// CSS
import "./HomePage.css";
// React Components
import FeaturedProject from "components/FeaturedProject";
import FeaturedSection from "components/FeaturedSection";
import TeamSection from "components/TeamSection/TeamSection";
import NumberStat from "components/NumberStat";
import Divider from "components/Divider";
import SponsorSection from "components/SponsorSection/SponsorSection";
import Blobbie from "components/Blobbie";

function HomePage() {

  return (
    <div className="homePage">
      <header className="homePage__hero">
        <div>
          <img className="homePage__logo" src={tsu_logo}></img>
          <p className="homePage__headerSubtitle">
            a tech club for dreamers and doers
          </p>
        </div>
      </header>

      <section className="homePage__aboutUs">
        <Blobbie id={8} width={400} transform="translate(-70%, -30%)" edge={true} /> {/* translate is relative to previous div*/}
        <Blobbie id={2} width={100} transform="translate(clamp(10vw, calc(10vw + 1rem), 40vw), 40%)" edge={false} />
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
            <NumberStat number={4} stat="projects so far" />
            <NumberStat number={32} stat="members so far" />
            <NumberStat number={93} extra={"%"} stat="enjoyed their involvement" />
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
        <Blobbie id={9} width={800} transform="translate(-80%, -30%)" edge={true} /> {/* translate is relative to previous div*/}
        <Blobbie id={2} width={150} transform="translate(90vw, -60%)" edge={false} />
        <SponsorSection />
      </section>
      <Blobbie id={11} width={200} transform="translate(-65%, -30%)" />
      <TeamSection />

    </div>
  );
}

export default HomePage;
