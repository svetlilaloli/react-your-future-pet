import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [error, setError] = useState("");
    const authService = authServiceFactory(auth.accessToken)
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalog');
        } catch (err) {
            setError(err.message ? err.message : err);
        }
    };

    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
        if (repeatPassword !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/catalog');
        } catch (err) {
            setError(err.message ? err.message : err);
        }
    };

    const onLogout = async () => {
        try {
            await authService.logout();
            setAuth({});
        } catch (err) {
            setError(err.message ? err.message : err);
        }
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        error,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};