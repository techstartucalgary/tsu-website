import MerchTeamPhoto from "../../images/merch/MerchTeamPhoto.jpeg";
import projectExample from "images/2022_project_members.png";
import Galatea_Tech_Talk_img from "../../images/events/Galatea_Tech_Talk.jpg";
import Interim_Showcase_Judges_img from "../../images/events/Interim_Showcase_Judges.jpeg";
import Arcurve_Lunch_Learn_img from "../../images/events/Arcurve_Lunch_Learn.jpeg";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    url: MerchTeamPhoto,
    caption: "Photo 1",
  },
  {
    id: 2,
    url: projectExample,
    caption: "Photo 2",
  },
  {
    id: 3,
    url: Galatea_Tech_Talk_img,
    caption: "Photo 3",
  },
  {
    id: 4,
    url: Interim_Showcase_Judges_img,
    caption: "Photo 4",
  },
  {
    id: 5,
    url: Arcurve_Lunch_Learn_img,
    caption: "Photo 5",
  },
  {
    id: 6,
    url: MerchTeamPhoto,
    caption: "Photo 6",
  },
  {
    id: 7,
    url: projectExample,
    caption: "Photo 7",
  },
  {
    id: 8,
    url: Galatea_Tech_Talk_img,
    caption: "Photo 8",
  },
  {
    id: 9,
    url: Interim_Showcase_Judges_img,
    caption: "Photo 9",
  },
  {
    id: 10,
    url: Arcurve_Lunch_Learn_img,
    caption: "Photo 10",
  },
  {
    id: 11,
    url: Galatea_Tech_Talk_img,
    caption: "Photo 11",
  },
  {
    id: 12,
    url: Interim_Showcase_Judges_img,
    caption: "Photo 12",
  },
];
