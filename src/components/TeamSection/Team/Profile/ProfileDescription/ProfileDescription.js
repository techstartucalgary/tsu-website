import './ProfileDescription.css';
const ProfileDescription = props => {

    return (
        <div className="ProfileDescription" >
            <div className="Bio">
                <h3>{props.member.name}</h3>
                <h4>{props.member.role}</h4>
            </div>
        </div >
    )
};

export default ProfileDescription;