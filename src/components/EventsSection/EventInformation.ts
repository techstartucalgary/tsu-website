import FinalShowcase24_img from "../../images/events/Final_Showcase_24.jpg";
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
    title: "Final Showcase 2024",
    description:
      "Come celebrate the remarkable progress our teams have achieved this school year in bringing their software development projects to life through technology and entrepreneurship! Network with esteemed faculty, industry guests, project managers, and our executive team. Lunch and refreshments will be provided for all attendees!",
    date: "Saturday, April 27, 2024",
    time: "12:00 - 4:00PM",
    image: FinalShowcase24_img,
    link: "https://www.eventbrite.ca/e/techstarts-final-showcase-tickets-823300141887",
  },
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

];
