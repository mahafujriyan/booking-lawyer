import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Roots = () => {
    const hideFooterOnRoutes = ['/contacts'];
    const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname);

    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           {!shouldHideFooter && <Footer />}
            
        </div>
    );
};

export default Roots;