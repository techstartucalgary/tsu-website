import sponsorLogoHunterHub from "images/sponsors/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsors/sponsor-logo-arcurve.png";
import sponsorGalatea from "images/sponsors/sponsor-logo-galatea.png";
import sponsorPason from "images/sponsors/sponsor-logo-pason.svg";
import sponsorIEEE from "images/sponsors/sponsor-logo-ieee.png";

export type Organization = {
  sponsorLink: string;
  sponsorImage: string;
};

export const SponsorList: Organization[] = [
  {
    sponsorLink: "https://www.pason.com/",
    sponsorImage: sponsorPason,
  },
  {
    sponsorLink: "https://www.arcurve.com/",
    sponsorImage: sponsorLogoArcurve,
  },
  {
    sponsorLink: "https://galateatech.com/",
    sponsorImage: sponsorGalatea,
  },
  {
    sponsorLink: "https://www.ucalgary.ca/hunter-hub",
    sponsorImage: sponsorLogoHunterHub,
  },
    {
    sponsorLink: "https://www.ieee.org/",
    sponsorImage: sponsorIEEE,
  },
];
