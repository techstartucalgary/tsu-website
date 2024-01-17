import LaunchNight2023_img from "../../images/events/Launch_night_2023.jpeg";
import PasonTechTalk_img from "../../images/events/PasonTechTalk.jpg";
import IEEExTechStart_img from "../../images/events/IEEExTechStart.jpg";

export interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
}

export const highlightedEvents: Event[] = [
  {
    title: "IEEE x TechStart",
    description:
      "We hosted our industry panel event in collaboration with IEEE on the topic of leveraging AI in product enhancement and user experiences! We covered real-world strategies and applications of AI in successful projects and had the opportunity to network with our industry guests from Galatea, GroupLabs, etc. ",
    date: "Wednesday, November 29, 2023",
    time: "5:00 - 7:00PM",
    image: IEEExTechStart_img,
    link: "https://www.instagram.com/p/C0SClrKPvWq/",
  },
  {
    title: "Pason Tech Talk",
    description:
      "We hosted a Tech Talk featuring one of our sponsors, Pason! Our project managers and teams learned the key aspects of using infrastructure as code and possible implementations of this using terraform! Our project teams were given the opportunity to gain a practical understanding of IaC concepts and tools.",
    date: "Thursday, November 9, 2023",
    time: "5:30 - 7:00PM",
    image: PasonTechTalk_img,
    link: "https://www.linkedin.com/posts/tech-start-ucalgary_at-our-last-dev-night-we-hosted-a-tech-talk-activity-7130289774577254400-ESeU?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Launch Night 2023",
    description:
      "We kicked off a thrilling new Tech Start Season! Our Project Managers pitched their projects and they're eager for you to be part of the action. Join us to learn more about what TechStart has in store for this year.",
    date: "Friday, September 22, 2023",
    time: "5:30 - 7:00PM",
    image: LaunchNight2023_img,
    link: "https://www.instagram.com/p/CxjG39nSR0G/?hl=en",
  },
];
