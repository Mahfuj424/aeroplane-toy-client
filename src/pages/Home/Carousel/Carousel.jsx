/* eslint-disable no-unused-vars */
import React from 'react';
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" />

                <div className="absolute justify-between left-10 text-white top-[20%] ml-10">
                    <i className='text-4xl font-bold'>The Essentials</i>
                    <h2 className='text-6xl mt-3 font-bold'>BABY TOY</h2>
                    <h4 className='text-4xl font-bold mt-5'>Check out - and check off - our list of <br />
                        must - haves for the new arrival</h4>
                    <button className='btn btn-warning mt-8'>Bye Now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className="absolute justify-between left-10 text-white top-[20%] ml-10">
                    <i className='text-4xl font-bold'>The Essentials</i>
                    <h2 className='text-6xl mt-3 font-bold'>BABY TOY</h2>
                    <h4 className='text-4xl font-bold mt-5'>Check out - and check off - our list of <br />
                        must - haves for the new arrival</h4>
                    <button className='btn btn-warning mt-8'>Bye Now</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;