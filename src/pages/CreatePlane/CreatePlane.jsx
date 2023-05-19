/* eslint-disable no-unused-vars */
import React from 'react';
import createPlane from '../../assets/gallery/createPlane.gif'

const CreatePlane = () => {
    return (
        <div className='bg-base-200 my-10 p-5'>
            <h1 className='text-center text-4xl font-semibold mt-5 underline'>How to Create a Aeroplane</h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={createPlane} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">More Details</h1>
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
                        <button className="btn btn-warning">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlane;