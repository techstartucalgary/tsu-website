import { ProfileDescriptionDiv } from "../TeamSection/ProfileDescription.styles";

interface ProfileDescriptionProps {
  name: string;
  affiliation: string;
  description: string;
}

const ProfileDescription = (props: ProfileDescriptionProps) => {
  return (
    <ProfileDescriptionDiv>
      <h3>{props.name}</h3>
      <h4>{props.affiliation}</h4>
      <br />
      <h4>{props.description}</h4>
    </ProfileDescriptionDiv>
  );
};

export default ProfileDescription;
