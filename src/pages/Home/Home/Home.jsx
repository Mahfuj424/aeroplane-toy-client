/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from '../Carousel/Carousel';
import useTitle from '../../../../Title/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel/>
        </div>
    );
};

export default Home;