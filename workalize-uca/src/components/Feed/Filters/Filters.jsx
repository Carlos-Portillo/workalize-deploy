import classes from './Filters.module.scss';

const Filters = () => {
    return(
        <section className={classes["filters-section"]}>
            <article>
                <h3>
                    Publication Date
                </h3>
                <button>
                    Urgent
                </button>
                <button>
                    Last week
                </button>
                <button>
                    Last month
                </button>
            </article>

            <article>
                <h3>
                    Department
                </h3>
                <button>
                    La Libertad
                </button>
                <button>
                    San Salvador
                </button>
                <button>
                    Sonsonate   
                </button>
            </article>

            <article>
                <h3>
                    Years of experience
                </h3>
                <button>
                    Without
                </button>
                <button>
                    1 - 4 years
                </button>
                <button>
                    5 - 10 years
                </button>
            </article>
            
            <article>
                <h3>
                    Salary
                </h3>
                <button>
                    200 USD - 500 USD
                </button>
                <button>
                501 USD - 800 USD
                </button>
                <button>
                    More of 800 USD   
                </button>
            </article>

            <article>
                <h3>
                    Paid social hours
                </h3>
                <button>
                    Yes        
                </button>
                <button>
                    No
                </button>
            </article>
        </section>
    );
}

export default Filters;