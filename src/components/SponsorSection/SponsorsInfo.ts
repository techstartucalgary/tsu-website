import sponsorLogoHunterHub from "images/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsor-logo-arcurve.png";
import sponsorLogoUnity from "images/sponsor-logo-unity.png";
import sponsorLogoMicrosoft from "images/sponsor-logo-microsoft.png";

export type Sponsor = {
  sponsorLink: string;
  sponsorImage: string;
};

export const SponsorList: Sponsor[] = [
  {
    sponsorLink: "https://www.arcurve.com/",
    sponsorImage: sponsorLogoArcurve,
  },
  {
    sponsorLink: "https://www.ucalgary.ca/hunter-hub",
    sponsorImage: sponsorLogoHunterHub,
  },
  {
    sponsorLink: "https://www.microsoft.com/",
    sponsorImage: sponsorLogoMicrosoft,
  },
  {
    sponsorLink: "https://unity.com/",
    sponsorImage: sponsorLogoUnity,
  },
];
