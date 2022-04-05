import { ProfileDescriptionDiv } from "./ProfileDescription.styles";

interface ProfileDescriptionProps {
  name: string;
  affiliation: string;
}

const ProfileDescription = (props: ProfileDescriptionProps) => {
  return (
    <ProfileDescriptionDiv>
      <h3>{props.name}</h3>
      <h4>{props.affiliation}</h4>
    </ProfileDescriptionDiv>
  );
};

export default ProfileDescription;
