/* eslint-disable no-unused-vars */
import React from 'react';
import errorPage from '../assets/gallery/404.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-base-200'>
            <img className='min-h-screen relative' src={errorPage} alt="" />
            <Link to='/'><button className='btn btn-outline btn-success top-10 left-5 absolute font-bold'>←Back to Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;