import classes from './SingleProyect.module.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const SingleProyect = ({ post = {}}) => {

   
    return (
        <div className={classes["container"]}>
            <article className={classes["proyect"]}>
                <p> Tags </p>
                <h1> {post.title} </h1>

                <h3>Description</h3>
                    <p>
                        {post.description}
                    </p>

                <h3>Requirements</h3>
                    <p>
                        {post.requirements}
                    </p>
                
                <h3>Employer</h3>
                    <p>
                        {post.employer}
                    </p>

                <div className={classes["button-container"]}>
                    <button>
                        Apply
                    </button>

                <Link to = "/search">
                    <button className={classes["return-button"]}>
                        Return
                    </button>
                </Link>
                    
                </div>
            </article>
        </div>
    );
}

export default SingleProyect;