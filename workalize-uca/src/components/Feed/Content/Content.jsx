import { useEffect, useState } from 'react'
import classes from './Content.module.scss';
import Proyects from './Proyects/Proyects';
import SeachBar from './SearchBar/SeachBar';
import Tags from './Tags/Tags';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const Content = () => {

  /* const message = useParams(); */

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
  }, []);


  const fetchPosts = async () => {
    
    try {
      let apiQuery = "https://workalize-uca-production.up.railway.app/api/post" /* 'http://localhost:3500/api/post/keyword/' */ ;
      
      
      const response = await fetch(apiQuery);

      if(response.ok){
        const data = await response.json();
        console.log(data); 
        setPosts(data.posts);
      }

    } catch (error) {

    }

    

  }
  /* console.log(posts); */

  return (
      <div className={classes["container"]}>
          {/* Search Bar */}
          <div className='search-bar'>
              <SeachBar/>
          </div>
          {/* Tags? */}
          <Tags />
          {/* Proyects */}
          <Proyects posts={posts}/>
      </div>
  );
}

export default Content;