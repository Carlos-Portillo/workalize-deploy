import classes from './Content.module.scss';
import Profile from './Profile/Profile';

const dummyData = [
    {
  "_id": {
    "$oid": "6382ac5cf5536d132331a62e"
  },
  "username": "Mario Martínez",
  "carnet": "00072520",
  "organization": "UCA El Salvador",
  "areaofinterest": "Software & IT",
  "availability": "Applaudo Studios Trainee Program",
  "projecttittle": "Applaudo Studios Trainee Program",
  "projectdescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

}

]

const Content = () => {
    return (
        <div className={classes["container"]}>
            <Profile posts={dummyData}/>
        </div>
    );
}

export default Content;