import './ProfileDescription.css';
const ProfileDescription = (props: any) => {

    const profileDescClassName = "ProfileDescription " + (props.isCarousel ? "ProfileDescription--carousel" : "");

    return (
        <div className={profileDescClassName}>
                <h3 className="profileDescription__name">{props.member.name}</h3>
                {props.member.project ?
                    <h4 className="profileDescription__subtitle">{props.member.project}</h4>
                    :
                    <h4 className="profileDescription__subtitle">{props.member.role}</h4>}
        </div >
    )
};

export default ProfileDescription;