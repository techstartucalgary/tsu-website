import joel_jpg from "../../images/team/Joel_Happ.jpeg";

export type TeamMember = {
    id: number;
    name: string;
    affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
    image: string;
    linkedin: string;
};
export const founder: TeamMember[] = [
    {
        id: 0,
        name: "Jodesdsel Happ",
        affiliation: "Founder & Chairman",
        image: joel_jpg,
        linkedin: "https://www.linkedin.com/in/joel-happ/",
    },
];
