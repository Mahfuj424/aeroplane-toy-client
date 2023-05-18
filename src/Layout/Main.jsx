/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sharedPage/Navbar/Navbar';

const Main = () => {
    return (
        <div className='md:w-[80%] w-full md:mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;