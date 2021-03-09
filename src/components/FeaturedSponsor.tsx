import React from "react";

function FeaturedSponsor(props: any) {
  return<a href={props.sponsorLink} className="homePage__projectItem homePage__sponsor" target="blank">
      <img src={props.sponsorImage} alt="" />
    </a>;
}

export default FeaturedSponsor;
