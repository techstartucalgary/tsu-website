import MicrosoftTechTalk_img from "../../images/events/MicrosoftTechTalk.jpeg";
import FinalShowcase2023_img from "../../images/events/final_showcase.jpg";
import LaunchNight2023_img from "../../images/events/Launch_night_2023.jpeg";

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
    title: "Launch Night 2023",
    description:
      "We kick off a thrilling new Tech Start Season! Our Project Managers pitched their projects and they're eager for you to be part of the action. Join us to learn more about what TechStart has in store for this year.",
    date: "Friday, September 22, 2023",
    time: "5:30 - 7:00PM",
    image: LaunchNight2023_img,
    link: "https://www.instagram.com/p/CxjG39nSR0G/?hl=en",
  },
  {
    title: "Final Showcase 2023",
    description:
      "We wrapped up Tech Start's 2022/2023 season with our final showcase event, where our project teams wowed our industry judges, sponsors, and special guests with their innovative solutions!",
    date: "Saturday, April 29, 2023",
    time: "12:00 - 3:30PM",
    image: FinalShowcase2023_img,
    link: "https://www.linkedin.com/posts/tech-start-ucalgary_softwareengineering-technology-programming-activity-7058565315751772161-hVgw?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Microsoft Tech Talk",
    description:
      "Our second tech talk featured Microsoft! We had the great opportunity to hear the stories of a Microsoft Software Developer, Software Engineering Manager, Product Manager, and Designer!",
    date: "Wednesday, February 15, 2023",
    time: "6:30 PM – 8:00 PM",
    image: MicrosoftTechTalk_img,
    link: "https://youtu.be/a9MefhxE81w",
  },
];
