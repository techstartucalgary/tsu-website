import Alberta_Tech_Horizon_img from "./EventImages/Alberta_Tech_Horizon.jpeg";
import Building_a_Brand_and_Business_img from "./EventImages/Building_a_Brand_and_Business.jpeg";

export type Event = { title: string, description: string, date: string, time: string, image: any, link: string };

export var upcomingEvents: Event[];
export var pastEvents: Event[];

upcomingEvents = [
    {
        title: "Alberta's Tech Horizon",
        description: "Alberta’s Tech Horizon is a panel event focused on the past, present and future of the technology industry in Alberta. Join us in our first ever panel event as we speak with: Laura Buhler(Executive Director of the C100), Kelly Cherniwchan(CEO and Founder of Chata Technologies), Jay Gohill(President and CEO of Arcurve), Kris Read(Co- Founder and Head of Engineering at Neo Financial).",
        date: "Thu, May 13, 2021",
        time: "7:30 PM – 8:45 PM MDT",
        image: Alberta_Tech_Horizon_img,
        link: "https://www.eventbrite.ca/e/albertas-tech-horizon-tickets-149515875007"
    }
];

pastEvents = [
    {
        title: "Building a Brand and Business",
        description: "For Tech Fest, Tech Start is excited to present a webinar on founding a business. Judy Hughes will walk us through her experiences with founding her own company JYZ Design and discuss what business practices and strategies companies will use to stand out from their competitors.",
        date: "",
        time: "",
        image: Building_a_Brand_and_Business_img,
        link: ""
    }
];