import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
 

const Layouts = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            <div className=' '>
                 {/* Dynamic section */}</div>
                 <Outlet/>

            
            {/* Footer */}
            <Footer/>
 
        </div>
    );
};

export default Layouts;