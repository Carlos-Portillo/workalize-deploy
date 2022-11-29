import classes from './LoginForm.module.scss';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {gapi} from 'gapi-script'
import { Link } from 'react-router-dom';
import Login from '../../../components/Login/Login';

const clientId = "558348186972-pc3efe3u7g9ink96tbljhq1f1idrgtmg.apps.googleusercontent.com";

const LoginForm = ({ onLogin = () => { } }) => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const errors = {
        "identifier": !identifier,
        "password": !password,
    }

    const hasErrors = () => Object.values(errors).some(error => error);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (hasErrors()) {
        toast.warn("Wrong fields");
        return;
        }

        onLogin(identifier, password);
    }

    useEffect(() => {
        function start() {
          gapi.auth2.init({
            clientId: clientId,
            scope: ""
          })
        };
        gapi.load('client:auth2', start);
    });
    

  return (
    <div className={classes["container"]}>
        <form onSubmit={onSubmitHandler} className={classes["form_container"]}>

            <figure className={classes["logo_container"]}>
                <img src="https://noticias.uca.edu.sv/storage/app/iconosArchivos/uca1.png" alt="uca logo" />
            </figure>

            <h2> Login </h2>

            {/* <button className={classes["google_login_button"]}>Log in with a Google Account</button> */}
            {/* <div id="signInDiv" className={classes["google_login_button"]}></div> */}
                {/* <Login/> */}

                <input
                    className={errors["identifier"] ? classes["error"] : ""}
                    type={"text"}
                    name="identifier"
                    autoComplete='username'
                    value={identifier}
                    placeholder="Username"
                    onChange={({ target }) => { setIdentifier(target.value) }} />

                <input
                    className={errors["password"] ? classes["error"] : ""}
                    type={"password"}
                    name="password"
                    autoComplete='current-password'
                    value={password}
                    placeholder="Password"
                    onChange={({ target }) => { setPassword(target.value) }} />

                <div className={classes["log_options"]}>
                    <div className={classes["remember_me"]}>
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    
                <Link to = "*">
                    <button>Forgot Password?</button>
                </Link>
                    
                </div>

            <button type="submit" disabled={hasErrors()} className={classes["login_button"]}> Login! </button>

            <div className={classes["register_button"]}>
                <p>Dont't have an acount?</p>
                <Link to = "/auth/signup">
                    <button>Register</button>
                </Link>
            </div>
        </form>

        <div className={classes["right_log_section"]}>
            <Link to = "/">
                <button>
                    Back to home
                </button>
            </Link>

            <figure className={classes["image_container"]}>
                <img src="https://img.freepik.com/vector-gratis/freelancer-trabajando-equipo-portatil-su-casa_1150-35054.jpg?w=826&t=st=1669539007~exp=1669539607~hmac=3d00d2e04a102cdc9988c074ba4f42a89a40a8742109a02939da6c271cc84958" alt="Log in image" />
            </figure>
            </div>
    </div>
  )
}

export default LoginForm;