import './Profile.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';

const Profile = props => {

    const ProfileClasses = ["ProfileDiv"];
    if (props.hoverAndClick) ProfileClasses.push("ProfileDiv--HoverAndClick");
    ProfileClasses.push(props.class);

    return (
        <div className={ProfileClasses.join(' ')} onMouseEnter={props.hover} onMouseLeave={props.leave} onClick={props.click} >
            <div className="ProfileIconDiv">
                <img
                    className="ProfileIcon"
                    src={props.profilePic}
                    key={props.key}
                    alt={props.alt} />
            </div>

            <ProfileDescription
                className="ProfileDescription"
                member={props.member}
                linkClicked={props.linkClicked}

                hover={props.hover}
                click={props.click}
                leave={props.leave}
            />

        </div>
    );
};

export default Profile;