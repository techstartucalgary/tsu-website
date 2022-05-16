import sponsorLogoHunterHub from "images/sponsors/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsors/sponsor-logo-arcurve.png";
import sponsorLogoUnity from "images/sponsors/sponsor-logo-unity.png";
import sponsorLogoMicrosoft from "images/sponsors/sponsor-logo-microsoft.png";
import sponsorGalatea from "images/sponsors/sponsor-logo-galatea.png";

export type Sponsor = {
  sponsorLink: string;
  sponsorImage: string;
};

export const SponsorList: Sponsor[] = [
  {
    sponsorLink: "https://www.microsoft.com/",
    sponsorImage: sponsorLogoMicrosoft,
  },
  {
    sponsorLink: "https://galateatech.com/",
    sponsorImage: sponsorGalatea,
  },
  {
    sponsorLink: "https://www.arcurve.com/",
    sponsorImage: sponsorLogoArcurve,
  },
  {
    sponsorLink: "https://unity.com/",
    sponsorImage: sponsorLogoUnity,
  },

  {
    sponsorLink: "https://www.ucalgary.ca/hunter-hub",
    sponsorImage: sponsorLogoHunterHub,
  },
];
