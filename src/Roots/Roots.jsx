import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Roots;