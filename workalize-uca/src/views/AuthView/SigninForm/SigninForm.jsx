import classes from './SigninForm.module.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

const SigninForm = ({ onRegister = () => { } }) => {
    const [organization, setOrganization] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const errors = {
        "username": !username || username.length < 4 || username.length > 32,
        "email": !email,
        "password": !password,
        "re-password": !rePassword || password !== rePassword
    }

    const hasErrors = () => Object.values(errors).some(error => error);

    const onSubmitHandler = (e) => {
        e.preventDefault();
                                                              
        if (hasErrors()) {
        toast.warn("Wrong fields!");
        return;
        }

        onRegister(username, email, password);
    }

  return (
    <div className={classes["container"]}>

        <div className={classes["left_log_section"]}>
            <Link to = "/">
                <button>
                    Back to home
                </button>
            </Link>
                <figure className={classes["image_container"]}>
                    <img src="https://flexoh.com/hrtrendy/wp-content/uploads/2022/05/6-claves-efectivas-disminuir-rotacion-personal-1024x680.jpg" alt="Sign in image" />
                </figure>
            </div>

        <form onSubmit={onSubmitHandler} className={classes["form_container"]}>

            <figure className={classes["logo_container"]}>
                <img src="https://noticias.uca.edu.sv/storage/app/iconosArchivos/uca1.png" alt="uca logo" />
            </figure>

            <h2> Create your Account </h2>

            <button className={classes["google_signin_button"]}>Sign in with a Google Account</button>

            <div className={classes["text_section"]}>
                <hr />
                <p>OR</p>
                <hr />    
            </div>

            <div className={classes["form_input"]}>               
                <label>
                    Username
                    <input
                    className={errors["username"] ? classes["error"] : ""}
                    type={"text"}
                    placeholder="e.g. MarioMartinez"
                    autoComplete="username"
                    name="username"
                    value={username}
                    onChange={({ target }) => { setUsername(target.value) }} />

                    <div className={classes["hint"]}>
                        Must have between 4 and 32 characters
                    </div>
                </label>

                <label>
                    Email
                    <input
                    className={errors["email"] ? classes["error"] : ""}
                    type={"email"}
                    placeholder="e.g. example@example.com"
                    autoComplete="email"
                    name="email"
                    value={email}
                    onChange={({ target }) => { setEmail(target.value) }} />
                    <div className={classes["hint"]}>
                        Should be a valid email
                    </div>
                </label>
                        
                <label>
                    Password
                    <input
                    className={errors["password"] ? classes["error"] : ""}
                    type={"password"}
                    autoComplete="new-password"
                    placeholder="A strong password"
                    name="password"
                    value={password}
                    onChange={({ target }) => { setPassword(target.value) }} />

                    <div className={classes["hint"]}>
                        Must have at least 1 uppercase, 1 lowercase, 1 number, and 8-32 characters
                    </div>
                </label>

                <label>
                    Repeat Password
                    <input
                    className={errors["re-password"] ? classes["error"] : ""}
                    type={"password"}
                    autoComplete="new-password"
                    placeholder="Repeat the strong password"
                    name="re-password"
                    value={rePassword}
                    onChange={({ target }) => { setRePassword(target.value) }} />
                </label>
            </div>
            
            
                <button type="submit" disabled={hasErrors()} className={classes["signin_button"]}> Get started! </button>
            
           

        </form>
    </div>
  )
}

export default SigninForm;