import React, { useState } from 'react'
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
import Particle from "components/Particles";
import { Link } from "react-router-dom";
import SponsorSection from "components/SponsorSection/SponsorSection";
import Blobbie from "components/Blobbie";
import EventsSection from "components/EventsSection/EventsSection";
import ProjectSection from 'components/ProjectSection';

function HomePage() {



  return (
    <div className="homePage">


      <header className="homePage__hero" id="homePageTop">
        <Particle />
        <div className="homePage__logoContainer">
          <img className="homePage__logo" src={tsu_logo}></img></div>
        <p className="homePage__headerSubtitle">
          a tech club for dreamers and doers
        </p>

      </header>

      <section className="homePage__section homePage__section--aboutUs">
        <Blobbie id={8} width={400} transform="translate(-70%, 0%)" edge={true} /> {/* translate is relative to previous div*/}
        <Blobbie id={2} width={100} transform="translate(clamp(20vw, calc(5vw + 1rem), 40vw), -10%)" edge={false} />
        <div className="homePage__container">

          <h1 className="chonkyHeading chonkyHeading--lessMargin">We're the innovators on campus.</h1>
          <Divider />
          <p className="regularText" id="draft">
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
          <Blobbie id={2} width={300} transform="translate(80vw, -30%)" edge={true} />
          <div className="homePage__numberContainer">
            <NumberStat number={4} stat="projects so far" />
            <NumberStat number={32} stat="members so far" />
            <NumberStat number={93} suffix={"%"} stat="enjoyed their involvement" />
          </div>
          <div className="homePage__applyButtonBox"><Link to="/apply" className="homePage__applyButtonLink" >
            <div className="homePage__applyButton">
              <div className="homePage__applyButtonArrow"> ˃˃ </div>
              <div className="homePage__applyButtonText"> theTeam.join()</div>
            </div></Link></div>
        </div>
      </section>

      <section className="homePage__section homePage__section--events">
        <Blobbie id={3} width={400} transform="translate(-75%, -40%)" edge={true} />
        <Blobbie id={8} width={150} transform="translate(75vw, 0vw)" edge={false} />
        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--lessMargin">Events</h1>
          <Divider />
          <EventsSection />
        </div>
      </section>

      <section className="homePage__section homePage__section--featuredProjects">
        <div className="homePage__container homePage__container--noVert">
          <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">Featured Projects</h2>
        </div>
        <Divider />
        <ProjectSection />
      </section>

      <section className="homePage__section homePage__section--team">
        <Blobbie id={12} width={300} transform="translate(93vw, -30%)" edge={true} />
        <Blobbie id={8} width={200} transform="translate(-10vw, 10vw)" edge={false} />
        <TeamSection />
      </section>

      <section className="homePage__section homePage__section--sponsors">
        <Blobbie id={9} width={800} transform="translate(-80%, -30%)" edge={true} /> {/* translate is relative to previous div*/}
        <Blobbie id={2} width={150} transform="translate(75vw, -60%)" edge={false} />
        <Blobbie id={2} width={75} transform="translate(85vw, 0%)" edge={false} />
        <SponsorSection />
      </section>
    </div>
  );
};

export default HomePage;
