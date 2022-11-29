import Content from '../../components/Project/Content/Content';
import classes from './ProjectView.module.scss';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';

const ProjectView = () => {
    const message = useParams();
    
    console.log(message._id);

    return (
        <div className={classes["feed-wrapper"]}>
            <Content
            id= {message._id}
            />
        </div>
    );
}

export default ProjectView;