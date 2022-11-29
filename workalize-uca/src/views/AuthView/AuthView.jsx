import { Routes, Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import SigninForm from './SigninForm/SigninForm';
import { useEffect } from 'react';

const AuthView = () => {
    const navigate = useNavigate();
    const { login, register, user } = useUserContext();

    const onLoginHandler = async (identifier, password) => {
        await login(identifier, password);
    }

    const onRegisterHandler = async (username, email, password) => {
        await register(username, email, password);
    }

    useEffect(() => {
        if(user) {
            navigate("/profile");
        }
    }, [user])

    /* useEffect(() => {
        if(register) {
            navigate("/profile");
        }
    }, [register]) */

    return (
        <div>
            <Routes>
                <Route path='signin' element={ <LoginForm  onLogin={onLoginHandler} /> } />
                <Route path='signup' element={ <SigninForm onRegister={onRegisterHandler}/> } />
                <Route path='*' element={<Navigate to="/not-found" />} />
            </Routes>
        </div>
    )
}

export default AuthView;