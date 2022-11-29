import classes from './Content.module.scss';
import Proyects from './Proyects/Proyects';

import { useEffect, useState } from 'react';

const Content = ({ id = "6385506be137c44f1aac302b"}) => {
  
  return (
      <div className={classes["container"]}>
          <Proyects id = {id}/>
      </div>
  );
}

export default Content;