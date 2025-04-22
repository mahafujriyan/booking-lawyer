import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Roots = () => {
    const location = useLocation();
    const hideFooterOnRoutes = ['/contacts'];
    const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname);
    const navigation=useNavigation()
    const isLoading=navigation.state==='loading'

    return (
        <div>
            <Navbar />
            {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-75 text-center py-2">
          <div className="animate-spin inline-block w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

            <Outlet />
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default Roots;
