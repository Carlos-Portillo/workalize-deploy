import Content from './Content/Content';
import classes from './Feed.module.scss';
import Filters from './Filters/Filters';

const Feed = () => {
    return (
        <div className={classes["feed-wrapper"]}>
            <Filters />

            <Content/>

        </div>
    );
}

export default Feed;