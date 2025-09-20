import teamData from "./teamMembers.json";

const importImage = (imageName: string) => {
  return require(`../../images/team/${imageName}`);
}

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string;
  image: string;
  linkedin: string;
};

type TeamMemberJSON = {
  name: string;
  affiliation: string;
  imagePath: string;
  linkedin: string;
};

type FounderDescription = {
  description: string;
};

export type FounderInfo = TeamMember & FounderDescription;

const processTeamMembers = (members: TeamMemberJSON[]): TeamMember[] => {
  if (members.length === 0) return [];
  return members.map((member, index) => ({
    id: index,
    name: member.name,
    affiliation: member.affiliation,
    linkedin: member.linkedin,
    image: importImage(member.imagePath)
  }));
};

export const getFounder = (): FounderInfo => ({
  ...teamData.founder,
  image: importImage(teamData.founder.imagePath)
});

export const getExecutiveTeam = (): TeamMember[] =>
  processTeamMembers(teamData.executiveTeam as TeamMemberJSON[]);

export const getProjectManagers = (): TeamMember[] =>
  processTeamMembers(teamData.projectManagers as TeamMemberJSON[]);

export const getAlumniTeam = (): TeamMember[] =>
  processTeamMembers(teamData.alumniTeam as TeamMemberJSON[]);

export const getBoardMembers = (): TeamMember[] =>
  processTeamMembers(teamData.boardMembers as TeamMemberJSON[]);

export const founder = getFounder();
export const executiveTeam = getExecutiveTeam();
export const projectManagers = getProjectManagers();
export const alumniTeam = getAlumniTeam();
export const boardMembers = getBoardMembers();