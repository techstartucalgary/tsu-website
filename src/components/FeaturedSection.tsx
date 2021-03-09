import React from "react";
import "./FeaturedSection.css";

function FeaturedSection(props:any) {
  return<article className="homePage__section homePage__spacing">
      <img src={props.sectionImage} alt="" className="homePage__sectionImage" />
      <h3 className="homePage__sectionTitle">{props.sectionTitle}</h3>
      <p className="homePage__sectionDescription">{props.sectionDescription}</p>
      <a href={props.sectionLink} className="homePage__btn">
        Learn More
      </a>
    </article>
}
export default FeaturedSection;
