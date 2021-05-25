import './ProfileDescription.css';
const ProfileDescription = (props: any) => {

    const profileDescClassName = "ProfileDescription " + (props.isCarousel ? "ProfileDescription--carousel" : "");

    return (
        <div className={profileDescClassName}>
            <div className="Bio">
                <h3 className="Bio__name">{props.member.name}</h3>
                {props.member.project ?
                    <h4 className="Bio__subtitle">{props.member.project}</h4>
                    :
                    <h4 className="Bio__subtitle">{props.member.role}</h4>}
            </div>
        </div >
    )
};

export default ProfileDescription;