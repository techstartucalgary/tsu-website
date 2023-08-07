import firstDevNight from "../../images/gallery/first_dev_night_2022.jpg";
import gitWorkshop from "../../images/gallery/git_workshop.jpg";
import arcruve from "../../images/gallery/arcurve_lunch_and_learn.jpg";
import galatea from "../../images/gallery/galatea.jpg";
import laserTag from "../../images/gallery/laser_tag.jpg";
import laserTag2 from "../../images/gallery/laser_tag2.jpg";
import bowling from "../../images/gallery/bowling.jpg";
import platform from "../../images/gallery/platform.jpg";
import execs from "../../images/gallery/execs.jpg";
import execs2 from "../../images/gallery/execs2.jpg";
import coding from "../../images/gallery/coding.jpg";
import finalShowcase1 from "../../images/gallery/final_showcase1.jpg";
import finalShowcase2 from "../../images/gallery/final_showcase2.jpg";
import finalShowcase3 from "../../images/gallery/final_showcase3.jpg";
import finalShowcase4 from "../../images/gallery/final_showcase4.jpg";
import finalShowcase5 from "../../images/gallery/final_showcase5.jpg";
import dinner from "../../images/gallery/dinner.jpg";
import pitch from "../../images/gallery/pitch.jpg";
import judges from "../../images/gallery/judges.jpg";
import pason from "../../images/gallery/pason.jpg";
import demo1 from "../../images/gallery/demo1.jpg";
import merch1 from "../../images/gallery/merch1.jpg";
import merch2 from "../../images/gallery/merch2.jpg";
import deepracer from "../../images/gallery/deepracer.jpg";
import christmas from "../../images/gallery/christmas.jpg";
import outing from "../../images/gallery/outing.jpg";
import blockchain from "../../images/gallery/blockchain.jpg";

export type GalleryImage = {
  id: number;
  title: string;
  src: string;
};

export const GalleryImages: GalleryImage[] = [
    {
        id: 0,
        title: "First Dev Night 2022",
        src: firstDevNight,
    },
    {
        id: 1,
        title: "Arcurve Lunch and Learn",
        src: arcruve,
    },
    {
        id: 2,
        title: "Laser Tag",
        src: laserTag,
    },
    {
        id: 3,
        title: "Bowling",
        src: bowling,
    },
    {
        id: 4,
        title: "Interim Showcase",
        src: platform,
    },
    {
        id: 5,
        title: "Execs Merch",
        src: execs,
    },
    {
        id: 6,
        title: "Execs at Final Showcase",
        src: execs2,
    },
    {
        id: 7,
        title: "Teams Prep for Interim Showcase",
        src: coding,
    },
    {
        id: 8,
        title: "Laser Tag",
        src: laserTag2,
    },
    {
        id: 9,
        title: "Final Showcase Rehearsal",
        src: finalShowcase1,
    },
    {
        id: 10,
        title: "Galatea Info Session",
        src: galatea,
    },
    {
        id: 11,
        title: "Dinner Outing",
        src: dinner,
    },
    {
        id: 12,
        title: "Interim Pitch",
        src: pitch,
    },
    {
        id: 13,
        title: "Interim Pitch Judges",
        src: judges,
    },
    {
        id: 14,
        title: "Final Showcase Rehearsal",
        src: finalShowcase2,
    },
    {
        id: 15,
        title: "Final Showcase",
        src: finalShowcase3,
    },
    {
        id: 16,
        title: "Final Showcase",
        src: finalShowcase4,
    },
    {
        id: 17,
        title: "Final Showcase",
        src: finalShowcase5,
    },
    {
        id: 18,
        title: "Demo Night with Pason",
        src: pason,
    },
    {
        id: 19,
        title: "Demo Night",
        src: demo1,
    },
    {
        id: 20,
        title: "Merch Shoot",
        src: merch1,
    },
    {
        id: 21,
        title: "Merch Shoot",
        src: merch2,
    },
    {
        id: 22,
        title: "Git Workshop",
        src: gitWorkshop,
    },
    {
        id: 23,
        title: "Deepracer",
        src: deepracer,
    },
    {
        id: 24,
        title: "Christmas Pizza Night",
        src: christmas,
    },
    {
        id: 25,
        title: "Dev Night Outing",
        src: outing,
    },
    {
        id: 25,
        title: "Blockchain Panel",
        src: blockchain,
    },
]