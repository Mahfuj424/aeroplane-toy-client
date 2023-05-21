/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from '../Carousel/Carousel';
import useTitle from '../../../../Title/useTitle';
import CreatePlane from '../../CreatePlane/CreatePlane';
import NewProduct from '../../newProduct/NewProduct';
import PhotoGallery from '../../photoGallery/PhotoGallery';
import CategoryTab from '../../SubCategoryTab/CategoryTab';
import Blog from '../../Blog/Blog';
import Testimonial from '../../UserReview/Testimonial';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel />
            <PhotoGallery/>
            <NewProduct />
            <CategoryTab/>
            <Testimonial/>
            <CreatePlane />
        </div>
    );
};

export default Home;