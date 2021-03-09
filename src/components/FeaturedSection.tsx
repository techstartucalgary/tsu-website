import React from "react";
import "./FeaturedSection.css";

function FeaturedSection(props:any) {
  return<article className="featuredSection">
      <img src={props.sectionImage} alt="" className="featuredSection__sectionImage" />
      <h3 className="featuredSection__sectionTitle">{props.sectionTitle}</h3>
      <p className="featuredSection__sectionDescription">{props.sectionDescription}</p>
      <a href={props.sectionLink} className="featuredSection__btn">
        Learn More
      </a>
    </article>
}
export default FeaturedSection;
