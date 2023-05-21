/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import createPlane from '../../assets/gallery/createPlane.gif'
import AOS from 'aos'

const CreatePlane = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='bg-green-100 my-20 p-5 rounded-xl'>
            <h1 className='text-center text-4xl font-semibold my-5'>How to Create a <span className='text-green-500'>Aeroplane</span></h1>
            <div className="hero bg-green-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-up">
                        <img src={createPlane} className=" rounded-lg shadow-2xl" />
                    </div>
                    <div data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h1 className="text-xl font-bold">More Details</h1>
                        <ul className='py-6'>
                            <li>1. Balsa wood or lightweight cardboard</li>
                            <li>2. Craft knife or scissors</li>
                            <li>3. Pencil</li>
                            <li>4. Ruler</li>
                            <li>5. Glue (craft glue or wood glue)</li>
                            <li>6. String or fishing line (for launching)</li>
                        </ul>
                        <p className='pb-1'>Using a ruler, measure and mark the dimensions of the airplane on the balsa wood or lightweight cardboard. Use a craft knife or scissors your design.</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlane;