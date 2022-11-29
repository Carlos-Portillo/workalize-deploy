import classes from './ProfileStruct.module.scss';

const ProfileStruct = ({ username = "No user", carnet = "No carnet", email = "No email",  areaofinterest = "No info.", availability = "No info", projecttittle = "No info", projectdescription = "No info"}) => {
    return (
        <div className={classes["container"]}>

            <div className={classes["profile-section"]}>
                <h2>{username}</h2>
                <p>{carnet}</p>
                <p>{email}</p>
            </div>

            <div className={classes["info-section"]}>
                <div className={classes["preference-section"]}>
                    <h2>Preferences</h2>
                    <h3>Area of Interest</h3>
                    <p>{areaofinterest}</p>
                    <h3>Availability</h3>
                    <p>{availability}</p>
                </div>

                <div className={classes["projects-section"]}>
                    <h2>Projects</h2>
                    <h3>{projecttittle}</h3>
                    <p>{projectdescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileStruct;