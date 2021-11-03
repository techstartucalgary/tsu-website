import Alberta_Tech_Horizon_img from "./EventImages/Alberta_Tech_Horizon.jpeg";
import Building_a_Brand_and_Business_img from "./EventImages/Building_a_Brand_and_Business.jpeg";
import launchImage from "./EventImages/tsulaunchimage.png";

export type Event = {
  title: string;
  description: string;
  date: string;
  time: string;
  image: any;
  link: string;
  // Will by default use "Register" as the link title. Use this prop to override that.
  linkTitleOverride?: string;
};

export var upcomingEvents: Event[];
export var pastEvents: Event[];

upcomingEvents = [];

pastEvents = [
  {
    title: "Launch Meeting 2021",
    description:
      "Join us for our launch meeting to find out what we do and how you can get involved!",
    date: "Thursday, Sept 23, 2021",
    time: "6:00 - 7:00 PM MT",
    image: launchImage,
    link: "https://ucalgary.zoom.us/j/7269738862",
    linkTitleOverride: "Zoom Link",
  },

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
