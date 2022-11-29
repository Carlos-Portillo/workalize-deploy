import React from 'react';
import classes from './SearchBar.module.scss';
import {FaSearch} from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import {useState} from 'react';

const SeachBar = () => {

/*   const [message, setMessage] = useState(''); */

  /* const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  }; */

  return (
    <div className={classes["search-bar"]}>
        <div className={classes["search-inputs"]}>

            <input type="text" 
            id="message"
            name="message"
            //onChange={handleChange}
            //value={message}
            placeholder="Search..."/>

            {/* <Link to= {`/search/keyword/${message}`}> */}
              <div className={classes["search-icon"]}> 
                  <FaSearch/>
              </div>
            {/*</Link>*/}
            
        </div>
    </div>
  )
}

export default SeachBar