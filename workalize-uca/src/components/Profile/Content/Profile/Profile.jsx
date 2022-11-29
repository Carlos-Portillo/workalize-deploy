import classes from './Profile.module.scss';
import ProfileStruct from '../ProfileStruct/ProfileStruct';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../../../contexts/UserContext';

const Profile = ({ posts = [] }) => {

    const mappedPosts = posts.map(post => {
        return(
            <ProfileStruct
                key={post._id}
                username = { post.username }
                carnet = {post.carnet}
                organization = { post.organization } 
                areaofinterest = {post.areaofinterest}
                availability = {post.availability}
                projecttittle = {post.projecttittle}
                projectdescription = {post.projectdescription}/>
        );
    });

    /* const getToken =  localStorage.getItem(useUserContext.state.token); */
    const getToken = () => localStorage.getItem(useUserContext.TOKEN_KEY);
    const token = getToken();
    /* const getTokenLS = () => localStorage.getItem(TOKEN_KEY); */

    /* useEffect(() => {
        const _token = useUserContext.getTokenLS();
    
        if (_token) {
          setToken(_token);
          console.log(_token);
        }
    }, []); */
    
    console.log(token);

    const [post, setPost] = useState();

    useEffect(() => {
        fetchPost()
    }, [])


    const fetchPost = async () => {
        try {
            
            console.log(token);

            const response = await axios.get('/auth/whoami', {
                headers: {
                  'Authorization': 'Bearer ' + token
                }
              });

            if(response.ok) {
                const data = await response.json();
                setPost(data)
                console.log(data);
            }
            
        } catch(error) {
            
        }
    }

    return(
        <section className={classes[".profile-section"]}>
            <div className={classes["profile"]}>
                {mappedPosts}            
            </div>
        </section>
    );
}

export default Profile;