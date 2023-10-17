import joel_jpg from "../../images/team/Joel_Happ.jpeg";

export type FounderInfo = {
    id: number;
    name: string;
    affiliation: string;
    description: string;
    image: string;
    linkedin: string;
};
export const founder: FounderInfo = {
    id: 1,
    name: "Joel Happ",
    affiliation: "Founder & Chairman",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: joel_jpg,
    linkedin: "https://www.linkedin.com/in/joel-happ/",
};
