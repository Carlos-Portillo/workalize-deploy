import classes from './HomeView.module.scss';

const HomeView = () => {
  return (
    <div className={classes["container"]}>
      <figure>
        <img src="https://i.blogs.es/f42e38/pexels-djordje-petrovic-2102416/1366_2000.jpg" alt="Home image" />
      </figure>

        <div className={classes["text-container"]}>
            <h2>Welcome to the Opportunity Center!</h2>
            <p>Welcome to the best website for managing & track your social service information.</p>
            <p> Our website has been MADE BY students and FOR students to help & guide them with finding social work with precise details.</p>
        </div>
    </div>
  )
}

export default HomeView;