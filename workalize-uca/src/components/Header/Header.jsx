import classes from './Header.module.scss';
import Button from '../Button/Button';
import {FaRegUser} from 'react-icons/fa';

import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

const Header = () => {
    const { logout, user } = useUserContext();
    const navigate = useNavigate();

    return (
        <header className={classes["Header"]}>
            <div>
                <Link to = "/">
                    <div className={classes["home_button"]}>
                    <figure>
                        <img src="https://noticias.uca.edu.sv/storage/app/iconosArchivos/uca1.png" alt="logo"/>
                    </figure>
                    </div>
                </Link>
                {
                    user ?
                        <>
                            <Link to = "/profile">
                                <button className={classes["profile_button"]}><FaRegUser/> Profile </button> 
                            </Link>
                        </> :
                        <>
                            
                        </>
                }
                
            </div>

            <div className={classes["Buttons"]}>
                {
                    !user ?
                        <>
                            <Button onClick={() => navigate("/auth/signin")}> Sign in </Button>
                            <Button onClick={() => navigate("/auth/signup")}> Sign up </Button>
                        </> :
                        <>
                            
                            <Button onClick={() => navigate("/search")}> Search </Button>
                            <Link to = "/auth/signin">
                                <Button onClick={() => { logout() }}> Sign out </Button>
                            </Link>
                            
                        </>
                }
            </div>
        </header>
    );
}

export default Header;