import classes from './Proyects.module.scss';
import SingleProyect from './../SingleProyect/SingleProyect';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Proyects = ({ id = "6385506be137c44f1aac302b" }) => {

    const [post, setPost] = useState();

    useEffect(() => {
        fetchPost()
    }, []);


    const fetchPost = async () => {
        try {
            const response = await fetch(`https://workalize-uca-production.up.railway.app/api/post/${id}`);
    
            if(response.ok){
            const data = await response.json(); 
            setPost(data);
            }
    
        } catch (error) {
    
        }
    }

    return(
        <section className={classes[".feed-proyects-section"]}>
            <div className={classes["proyects"]}>
                {/* { mappedPosts } */}
                <SingleProyect
                    post = {post}
                />              
            </div>
        </section>
    );
}

export default Proyects