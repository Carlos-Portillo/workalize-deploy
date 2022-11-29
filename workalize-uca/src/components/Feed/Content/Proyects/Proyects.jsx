import classes from './Proyects.module.scss';
import SingleProyect from '../SingleProyect/SingleProyect';

const Proyects = ({ posts = [] }) => {

    const mappedPosts = posts.map(post => {
        return(
            <SingleProyect
                post = { post }
                key={post._id}
                title = { post.title }
                description = { post.description } />
        );
    });

    return(
        <section className={classes[".feed-proyects-section"]}>
            <div className={classes["proyects"]}>
                { mappedPosts }                
            </div>
        </section>
    );
}

export default Proyects