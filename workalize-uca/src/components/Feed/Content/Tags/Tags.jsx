import React from 'react';
import {FaTags} from 'react-icons/fa';
import classes from './Tags.module.scss';

const Tags = () => {
    return(
        <div className={classes["tags-container"]}>
            <h3>
                <FaTags/> Tags 
            </h3>
        </div>
    );
}

export default Tags;