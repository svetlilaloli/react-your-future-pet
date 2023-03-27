import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import * as authService from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Navigation } from './components/Navigation/Navigation';
import { About } from './components/About/About';
import { Catalog } from './components/Catalog/Catalog';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Details } from './components/Details/Details';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Add } from './components/Add/Add';
import { Edit } from './components/Details/Edit/Edit';

export default function App() {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            })
    }, [])

    const onAddSubmit = async (data) => {
        const newPet = await petService.add(data)
        setPets(state => [...state, newPet]);
        navigate('./catalog');
    }

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data)
            setAuth(result);
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }

    const onRegisterSubmit = async (data) => {
        const {repeatPassword, ...registerData} = data;
        if(repeatPassword !== registerData.password){
            return;
        }
        try {
            const result = await authService.register(registerData)
            setAuth(result);
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
        navigate('/');
    }

    const context = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <AuthContext.Provider value={context}>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/catalog' element={<Catalog pets={pets} />} />
                <Route path='/add' element={<Add onAddSubmit={onAddSubmit} />} />
                <Route path='/edit' element={<Edit />} />
                <Route path='/catalog/:petId' element={<Details />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
            <Footer />
        </AuthContext.Provider>
    );
}
