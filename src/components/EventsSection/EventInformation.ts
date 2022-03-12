import Alberta_Tech_Horizon_img from "./EventImages/Alberta_Tech_Horizon.jpeg";
import Funding_the_Next_Unicorn_img from "./EventImages/Funding_The_Next_Unicorn.jpg";
import Internship_Panel_img from "./EventImages/internship_panel.jpg";

export type Event = {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
};

export var highlightedEvents: Event[];
export var pastEvents: Event[];

highlightedEvents = [
  {
    title: "Internship Panel",
    description:
      "This panel event is meant to provide guidance for current computer science/software engineering students on the topic of internships. Having a panel consisting exclusively of students will provide the audience with a more relatable perspective and hopefully provide a lot of honest insight into their internship experience. Our panelists come from a variety of different backgrounds having experienced internships at companies such as Tesla, Microsoft, and Activision, to panelists that are just starting out their internship year in the coming summer!",
    date: "Thursday, March 17, 2022",
    time: "5:30 PM – 6:30 PM",
    image: Internship_Panel_img,
    link: "https://www.eventbrite.ca/e/internship-101-panel-tickets-295473016747",
  },
];

pastEvents = [
  {
    title: "Funding the Next Unicorn",
    description:
      "This panel event focuses on exploring the role Venture Capital plays within the technology industry. Event topics include an introduction into what VC is, how they find deal flow and evaluate potential investments, what they look for in early stage tech businesses, and what trends they find most interesting in the tech industry today.",
    date: "Friday, February 4, 2022",
    time: "5:30 PM – 7:30 PM MST",
    image: Funding_the_Next_Unicorn_img,
    link: "https://www.youtube.com/watch?v=-bAEAzjLLF4",
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
];
