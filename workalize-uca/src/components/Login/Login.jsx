/* import { useState } from 'react'; */
import axios from 'axios';
import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';


const Login = () => {
    
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");


    const clientId = "558348186972-pc3efe3u7g9ink96tbljhq1f1idrgtmg.apps.googleusercontent.com";

    const onSuccess = (res) => {
        console.log("login success" ,res);
        setName(res.profileObj.name);
        setEmail(res.profileObj.email);
        setUrl(res.profileObj.imageUrl);
        setToken(res.tokenId);
    };

    const onFailure = (res) => {
        console.log("login failed" , res);
    };

    /* const login = async() => {
        try {
            await axios.post("/auth/signin", {token, name, email, url});
            toast.success("Signin successful")
        } catch(error) {
            const {status} = error.response || {status: 500};
            const msg = {
                "400": "Wrong Fields",
                "409": "User already exists",
                "500": "Unexpected error"
            }

            toast.error(msg[String(status)]);
        }
    } */
 
    return(
        <div id= "signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with your Google Account"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login