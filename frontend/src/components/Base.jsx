import React from 'react';
import Header from './Header';
import Register from '../components/pages/Register';
import Login from '../components/pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function Base() {
    return (
        <>
            
            <Routes>

                <Route path="/" element={<Header />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            
            </Routes>
        </>

    );
}

export default Base;
