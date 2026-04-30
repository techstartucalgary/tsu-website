import ZooTechHackathon_img from "../../images/events/ZooTech_Hackathon.jpg";
import ArcurveTechTalk_img from "../../images/events/Arcurve_Tech_Talk.jpg";
import FinalShowcase24_img from "../../images/events/Final_Showcase_24.jpg";
import IEEExTechStart_img from "../../images/events/IEEExTechStart.jpg";
import PasonTechTalk_img from "../../images/events/PasonTechTalk.jpg";
import PitchNight_img from "../../images/events/pitchNight.jpg";

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
    title: "ZooTech x Cursor Hackathon",
    description:
      "We teamed up with ZOO (Electrical & Software Engineering Students' Society) and Cursor for a high-energy 24-hour hackathon where students built innovative software projects from scratch! Participants worked in teams to develop real-world solutions, leveraging modern tools like AI, and pitched their ideas to industry judges.",
    date: "March 14 - 15, 2026",
    time: "24 Hours",
    image: ZooTechHackathon_img,
    link: "https://www.instagram.com/p/DV8_IPAlPPV/",
  },
  {
    title: "Arcurve Tech Talk",
    description:
      "We teamed up with Arcurve for a hands-on deep dive into Application Security 101! Our speakers, Technical Leads Andrew Langemann and Matthew Powaschuk and Software Developer Haris Muhammad, guided students through live hacking demos and real-world defense strategies.",
    date: "Thursday, November 27, 2025",
    time: "6:00 - 8:00 PM",
    image: ArcurveTechTalk_img,
    link: "https://www.instagram.com/p/DRphWrcj5_O/",
  },
  {
    title: "Pitch Night",
    description:
      "We hosted Pitch Night as an exciting event where students presented their startup ideas and projects to an audience of peers and judges! Participants delivered confident pitches, shared innovative concepts, and engaged in inspiring conversations while receiving feedback to refine their ideas.",
    date: "Thursday, November 20, 2025",
    time: "6:00 - 8:00 PM",
    image: PitchNight_img,
    link: "https://www.instagram.com/reel/DRa040rjymB/",
  },
  {
    title: "Final Showcase 2024",
    description:
      "Our 2024 Final Showcase was an astounding success, pushing our club to new heights and setting even higher standards for what project teams are able to achieve. Congratulations to all the project teams for their achievements this year! ",
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
