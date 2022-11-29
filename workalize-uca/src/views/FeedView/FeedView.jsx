import Content from '../../components/Feed/Content/Content';
import posts from '../../components/Feed/Content/Proyects/Proyects'
import classes from './FeedView.module.scss';
import Filters from '../../components/Feed/Filters/Filters';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
import { useConfigContext } from './../../contexts/ConfigContext';
import { useState } from 'react';

const FeedView = () => {
   const [posts, setPosts] = useState([]);
    const { startLoading, stopLoading } = useConfigContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    // Funcion para mostrar todos los elementos
    const fetchPosts = async () => {
        try {
            startLoading();
            const { data } = await axios.get("/post");
            setPosts(data.posts);
        } catch (error) {
            toast.error("Unexpected error!");
        } finally{
            stopLoading();
        }
    }

    return (
        <div className={classes["feed-wrapper"]}>
            <Filters />

            <Content posts={posts}/>

        </div>
    );
}

export default FeedView;