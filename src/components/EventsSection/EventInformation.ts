import Funding_the_Next_Unicorn_img from "../../images/events/Funding_The_Next_Unicorn.jpg";
import Internship_Panel_img from "../../images/events/Internship_Panel.jpg";
import Tech_Start_Logo_Black_img from "../../images/tech-start-logo-black.png";
import Galatea_Tech_Talk_img from "../../images/events/Galatea_Tech_Talk.jpg";

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
    title: "Tech Talk with Galatea",
    description:
      "An exclusive Tech Talk with Galatea Technologies Inc. on leveraging AI and ML in conventional logistics workflows to build sustainable industry and supply chains!",
    date: "Thursday, December 1, 2022",
    time: "5:30 PM – 6:30 PM",
    image: Galatea_Tech_Talk_img,
    link: "https://www.linkedin.com/posts/tech-start-ucalgary_yesterday-we-had-an-exclusive-tech-talk-with-activity-7004661727279673344-Z_Ld?utm_source=share&utm_medium=member_desktop",
  },
];

pastEvents = [
  {
    title: "Internship Panel",
    description:
      "This panel event is meant to provide guidance for current computer science/software engineering students on the topic of internships. Having a panel consisting exclusively of students will provide the audience with a more relatable perspective and hopefully provide a lot of honest insight into their internship experience. Our panelists come from a variety of different backgrounds having experienced internships at companies such as Tesla, Microsoft, and Activision, to panelists that are just starting out their internship year in the coming summer!",
    date: "Thursday, March 17, 2022",
    time: "5:30 PM – 6:30 PM",
    image: Internship_Panel_img,
    link: "https://www.eventbrite.ca/e/internship-101-panel-tickets-295473016747",
  },

  {
    title: "Funding the Next Unicorn",
    description:
      "This panel event focuses on exploring the role Venture Capital plays within the technology industry. Event topics include an introduction into what VC is, how they find deal flow and evaluate potential investments, what they look for in early stage tech businesses, and what trends they find most interesting in the tech industry today.",
    date: "Friday, February 4, 2022",
    time: "5:30 PM – 7:30 PM MST",
    image: Funding_the_Next_Unicorn_img,
    link: "https://www.youtube.com/watch?v=-bAEAzjLLF4",
  },
];
