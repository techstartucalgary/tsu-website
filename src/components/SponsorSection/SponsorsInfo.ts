import sponsorLogoHunterHub from "images/sponsors/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsors/sponsor-logo-arcurve.png";
import sponsorLogoMicrosoft from "images/sponsors/sponsor-logo-microsoft.png";
import sponsorGalatea from "images/sponsors/sponsor-logo-galatea.png";
import sponsorPason from "images/sponsors/sponsor-logo-pason.svg";
import sponsorIEEE from "images/sponsors/sponsor-logo-ieee.png";
import partnerSchulichIgnite from "images/sponsors/partner-logo-schulich-ignite.png";
import partnerAcRobotics from "images/sponsors/partner-logo-ac-robotics.png";
import partnerPlatformCalgary from "images/sponsors/partner-logo-platform-calgary.png";
import partnerThinAirLabs from "images/sponsors/partner-logo-thin-air-labs.png";
import partnerBCG from "images/sponsors/partner-logo-bcg.jpg";
import partnerTC from "images/sponsors/partner-logo-tc.png";

export type Sponsor = {
  sponsorLink: string;
  sponsorImage: string;
};

export const SponsorList: Sponsor[] = [
  {
    sponsorLink: "https://www.pason.com/",
    sponsorImage: sponsorPason,
  },
  {
    sponsorLink: "https://www.arcurve.com/",
    sponsorImage: sponsorLogoArcurve,
  },
  {
    sponsorLink: "https://www.ieee.org/",
    sponsorImage: sponsorIEEE,
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
    sponsorLink: "https://www.microsoft.com/",
    sponsorImage: sponsorLogoMicrosoft,
  },
];

export const PartnerList: Sponsor[] = [
  {
    sponsorLink: "https://www.acrobotics.ca/",
    sponsorImage: partnerAcRobotics,
  },
  {
    sponsorLink: "https://schulichignite.com/",
    sponsorImage: partnerSchulichIgnite,
  },
  {
    sponsorLink: "https://www.platformcalgary.com/",
    sponsorImage: partnerPlatformCalgary,
  },
  {
    sponsorLink: "https://www.thinairlabs.ca/",
    sponsorImage: partnerThinAirLabs,
  },
  {
    sponsorLink: "https://www.bcg.com/en-ca/",
    sponsorImage: partnerBCG,
  },
  {
    sponsorLink: "https://www.tcenergy.com/",
    sponsorImage: partnerTC,
  },
];
