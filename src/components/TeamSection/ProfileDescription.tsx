import "./ProfileDescription.css";
import { TeamMember } from "./TeamInformation";

interface ProfileDescriptionProps {
  isCarousel: boolean;
  member: TeamMember;
}

const ProfileDescription = (props: ProfileDescriptionProps) => {
  const profileDescClassName =
    "ProfileDescription " +
    (props.isCarousel ? "ProfileDescription--carousel" : "");

  return (
    <div className={profileDescClassName}>
      <h3 className="profileDescription__name">{props.member.name}</h3>
      <h4 className="profileDescription__subtitle">
        {props.member.affiliation}
      </h4>
    </div>
  );
};

export default ProfileDescription;
