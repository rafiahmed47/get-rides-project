import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Destination from './Pages/Destination/Destination';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Searched from './Pages/Searched/Searched';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

const App = () => {
    return (
        <div className='p-6'>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:vehicles" 
                element={
                    <PrivateRoute>
                        <Destination />
                    </PrivateRoute>
                } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/searched" element={<Searched />} />
            </Routes>
            </AuthProvider>
        </div>
    );
};

export default App;