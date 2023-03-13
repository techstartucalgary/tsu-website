import MerchTeamPhoto from "../../images/merch/MerchTeamPhoto.jpeg";
import projectExample from "images/2022_project_members.png";
import Galatea_Tech_Talk_img from "../../images/events/Galatea_Tech_Talk.jpg";
import Interim_Showcase_Judges_img from "../../images/events/Interim_Showcase_Judges.jpeg";
import Arcurve_Lunch_Learn_img from "../../images/events/Arcurve_Lunch_Learn.jpeg";

interface Photo {
  id: number;
  src: string;
  caption: string;
  width: number;
  height: number;
}

export const galleryPhotos: Photo[] = [
  {
    id: 1,
    src: MerchTeamPhoto,
    caption: "Photo 1",
    width: 3,
    height: 2,
  },
  {
    id: 2,
    src: projectExample,
    caption: "Photo 2",
    width: 4,
    height: 3,
  },
  {
    id: 3,
    src: Galatea_Tech_Talk_img,
    caption: "Photo 3",
    width: 4,
    height: 3,
  },
  {
    id: 4,
    src: Interim_Showcase_Judges_img,
    caption: "Photo 4",
    width: 4,
    height: 3,
  },
  {
    id: 5,
    src: Arcurve_Lunch_Learn_img,
    caption: "Photo 5",
    width: 4,
    height: 3,
  },
  {
    id: 6,
    src: MerchTeamPhoto,
    caption: "Photo 6",
    width: 5,
    height: 3,
  },
  {
    id: 7,
    src: projectExample,
    caption: "Photo 7",
    width: 4,
    height: 3,
  },
  {
    id: 8,
    src: Galatea_Tech_Talk_img,
    caption: "Photo 8",
    width: 4,
    height: 3,
  },
  {
    id: 9,
    src: Interim_Showcase_Judges_img,
    caption: "Photo 9",
    width: 4,
    height: 3,
  },
  {
    id: 10,
    src: Arcurve_Lunch_Learn_img,
    caption: "Photo 10",
    width: 4,
    height: 3,
  },
  {
    id: 11,
    src: Galatea_Tech_Talk_img,
    caption: "Photo 11",
    width: 4,
    height: 3,
  },
  {
    id: 12,
    src: Interim_Showcase_Judges_img,
    caption: "Photo 12",
    width: 4,
    height: 3,
  },
];
