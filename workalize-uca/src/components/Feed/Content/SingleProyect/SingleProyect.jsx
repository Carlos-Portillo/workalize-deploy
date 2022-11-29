import classes from './SingleProyect.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleProyect = ({post = {}}/* { key = "", title = "No title", description = "No desc." } */) => {


    return (
        <article className={classes["proyects"]}>
            <p> Tags </p>
            <h4> {post.title} </h4>
            <p>
                {post.description}
            </p>

            <div className={classes["button-container"]}>
                <Link to = {`/project-view/${post._id}`}>
                        <button>View</button>
                </Link>
            </div>
        </article>
    );
}

export default SingleProyect;