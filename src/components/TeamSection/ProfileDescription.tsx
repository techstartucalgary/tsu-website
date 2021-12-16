import "./ProfileDescription.css";
import { ExecutiveMember, ProjectManager } from "./TeamInformation";

interface ProfileDescriptionProps {
  isCarousel: boolean;
  member: ExecutiveMember | ProjectManager;
}

function instanceOfProjectManager(
  member: ExecutiveMember | ProjectManager
): member is ProjectManager {
  return true;
}

const ProfileDescription = (props: ProfileDescriptionProps) => {
  const profileDescClassName =
    "ProfileDescription " +
    (props.isCarousel ? "ProfileDescription--carousel" : "");

  return (
    <div className={profileDescClassName}>
      <h3 className="profileDescription__name">{props.member.name}</h3>
      {instanceOfProjectManager(props.member) ? (
        <h4 className="profileDescription__subtitle">{props.member.project}</h4>
      ) : (
        <h4 className="profileDescription__subtitle">{props.member.role}</h4>
      )}
    </div>
  );
};

export default ProfileDescription;
