import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import classes from './App.module.scss';

import FeedView from './views/FeedView/FeedView'
import NotFoundView from './views/NotFoundView/NotFoundView';
import AuthView from './views/AuthView/AuthView';
import HomeView from './views/HomeView/HomeView';
import ProyectView from './views/ProjectView/ProjectView';
import ProfileView from './views/ProfileView/ProfileView';
/* import Mailer from './components/Mailer/Mailer'; */

function App() {

  return (
    <div className={classes["App"]}>
      <Header />

      {/* Main */}
      <main>
        <Routes>
          <Route index element = { <HomeView/> }/> 
          <Route path='search' element = { <FeedView/> }/>
          <Route path='search/keyword/:keyword' element = { <FeedView/> }/>
          <Route path='project-view/:_id' element = {<ProyectView/>}/>
          <Route path='profile/' element = {<ProfileView/>}/>
          <Route path='auth/*' element={ <AuthView/> }/> 
          <Route path='*' element = { <NotFoundView/> }/>  
          {/* <Route path='sendemail' element={<Mailer/>} /> */}

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
