/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from '../Carousel/Carousel';
import useTitle from '../../../../Title/useTitle';
import CreatePlane from '../../CreatePlane/CreatePlane';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel />
            <CreatePlane/>
        </div>
    );
};

export default Home;