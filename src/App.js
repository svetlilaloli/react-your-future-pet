import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';

import { RouteGuard } from './components/common/RouteGuard';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Catalog } from './components/Catalog/Catalog';
import { Add } from './components/Add/Add';
import { Edit } from './components/Details/Edit/Edit';
import { Details } from './components/Details/Details';
import { Footer } from './components/Footer/Footer';

export default function App() {
    return (
        <AuthProvider>
            <PetProvider>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<RouteGuard><Register /></RouteGuard>} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/add' element={<RouteGuard><Add /></RouteGuard>} />
                    <Route path='/catalog/:petId' element={<Details />} />
                    <Route path='/catalog/:petId/edit' element={<RouteGuard><Edit /></RouteGuard>} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer />
            </PetProvider>
        </AuthProvider>
    );
}
