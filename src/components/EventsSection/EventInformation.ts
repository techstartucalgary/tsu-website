import Alberta_Tech_Horizon_img from "./EventImages/Alberta_Tech_Horizon.jpeg";
import Building_a_Brand_and_Business_img from "./EventImages/Building_a_Brand_and_Business.jpeg";
import Funding_the_Next_Unicorn_img from "./EventImages/Funding_The_Next_Unicorn.jpg";

export type Event = {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
  // Will by default use "Register" as the link title. Use this prop to override that.
  linkTitleOverride?: string;
};

export var upcomingEvents: Event[];
export var pastEvents: Event[];

upcomingEvents = [
  {
    title: "Funding the Next Unicorn",
    description:
      "Are you interested in exploring the intersection between Venture Capital and Technology? Look no further than our new panel event, Funding the Next Unicorn. Funding the Next Unicorn is a panel event focused on exploring the role Venture Capital plays within the technology industry. Specifically the event topics will include an introduction into what VC is, how they find deal flow and evaluate potential investments, what they look for in early stage tech businesses, and what trends they find most interesting in the tech industry today.",
    date: "Friday, February 4, 2022",
    time: "5:30 PM – 7:30 PM MST",
    image: Funding_the_Next_Unicorn_img,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfaJbGyalJgL0HgTasWNiwYhaoRv8sIflCGFAyg0pC4rHwYuw/viewform",
  },
];

pastEvents = [
  {
    title: "Alberta's Tech Horizon",
    description:
      "Alberta’s Tech Horizon was a panel event focused on the past, present and future of the technology industry in Alberta. Our panelists were Laura Buhler (Executive Director of the C100), Kelly Cherniwchan (CEO and Founder of Chata Technologies), Jay Gohill (President and CEO of Arcurve), and Kris Read (Co-Founder and Head of Engineering at Neo Financial).",
    date: "Thursday, May 13, 2021",
    time: "7:30 PM – 8:45 PM MDT",
    image: Alberta_Tech_Horizon_img,
    link: "https://www.eventbrite.ca/e/albertas-tech-horizon-tickets-149515875007",
  },

  {
    title: "Building a Brand and Business",
    description:
      "As part of the Hunter Hub's Tech Bytes event, we collaborated with entrepreneur Judy Hughes to host a webinar on building a brand and a business. Judy walked us through her experiences with founding her own company, JYZ Design, and discussed how companies can stand out from their competitors.",
    date: "",
    time: "",
    image: Building_a_Brand_and_Business_img,
    link: "",
  },
];
