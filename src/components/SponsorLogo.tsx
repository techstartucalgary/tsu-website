import React from "react";
import './SponsorLogo.css';

function SponsorLogo(props: any) {
  return<a href={props.sponsorLink} className="sponsorLogo" target="blank">
      <img src={props.sponsorImage} alt="" />
    </a>;
}

export default SponsorLogo;
