import Funding_the_Next_Unicorn_img from "../../images/events/Funding_The_Next_Unicorn.jpg";
import Internship_Panel_img from "../../images/events/Internship_Panel.jpg";
import Tech_Start_Logo_Black_img from "../../images/tech-start-logo-black.png";
import Galatea_Tech_Talk_img from "../../images/events/Galatea_Tech_Talk.jpg";
import Interim_Showcase_Judges_img from "../../images/events/Interim_Showcase_Judges.jpeg";
import Arcurve_Lunch_Learn_img from "../../images/events/Arcurve_Lunch_Learn.jpeg";
import Blockchain_Panel_img from "../../images/events/Blockchain_Panel.jpeg";

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
    title: "Blockchain Panel",
    description:
      "Join us for an enlightening panel discussion on the future of blockchain technology. Our esteemed panel of experts will delve into the various applications and implications of this revolutionary technology. ",
    date: "Friday, February 3, 2023",
    time: "6:30 PM – 7:30 PM",
    image: Blockchain_Panel_img,
    link: "https://events.vtools.ieee.org/m/344006",
  },

  {
    title: "Interim Showcase 2023",
    description:
      "We had our first interim showcase at Platform Calgary, where our 6 amazing development teams pitched their projects to industry judges!",
    date: "Saturday, January 14, 2023",
    time: "11:00 AM – 2:00 PM",
    image: Interim_Showcase_Judges_img,
    link: "https://www.linkedin.com/posts/tech-start-ucalgary_industry-software-softwareengineer-activity-7020268933291155456-wr59/?utm_source=share&utm_medium=member_desktop",
  },
];

pastEvents = [
  {
    title: "Arcurve PM Lunch and Learn",
    description:
      "A Lunch and Learn where our Project Managers learned the key aspects of using scrum for project development, and the benefits it offers to ensure optimal efficiency is achieved in agile software developmental projects!",
    date: "Monday, December 12, 2022",
    time: "",
    image: Arcurve_Lunch_Learn_img,
    link: "https://www.linkedin.com/posts/tech-start-ucalgary_yesterday-we-had-a-lunch-and-learn-with-arcurve-activity-7008539528407764992-sYGH?utm_source=share&utm_medium=member_desktop",
  },
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
