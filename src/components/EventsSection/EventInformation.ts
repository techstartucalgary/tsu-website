import Interim_Showcase_Judges_img from "../../images/events/Interim_Showcase_Judges.jpeg";
import MicrosoftTechTalk_img from "../../images/events/MicrosoftTechTalk.jpeg";
import FinalShowcase2023_img from "../../images/events/final_showcase.jpg";
import LaunchNight2023_img from "../../images/events/Launch_night-2023.jpeg";

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
      "We're excited to kick off a thrilling new Tech Start Season! Our Project Managers will be pitching their projects and they're eager for you to be part of the action. Join us to learn more about what TechStart has in store for the this year and connect with our Executive Team.",
    date: "Friday, September 22, 2023",
    time: "5:30 - 7:00PM",
    image: LaunchNight2023_img,
    link: "",
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
