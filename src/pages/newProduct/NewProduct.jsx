/* eslint-disable no-unused-vars */
import React from 'react';
import cardImage1 from '../../assets/gallery/card1.jpg'
import cardImage2 from '../../assets/gallery/card2.jpg'
import cardImage3 from '../../assets/gallery/card3.jpg'
import cardImage4 from '../../assets/gallery/card4.jpg'
import cardImage5 from '../../assets/gallery/card5.jpg'
import cardImage6 from '../../assets/gallery/card6.jpg'

const NewProduct = () => {
    return (
        <div className='bg-green-100 my-10 p-5 rounded-xl'>
            <h1 className='text-3xl font-semibold underline text-center uppercase'>latest products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                <div className="card w-[350px] md:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-full rounded-xl p-3' src={cardImage1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Passenger Plane</h2>
                        <p>The toy plane features a sleek and aerodynamic design, mimicking the real-life counterparts. It may have realistic details such as wings, fuselage, landing gear, propellers, and cockpit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] md:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-full rounded-xl p-3' src={cardImage2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Military Plane</h2>
                        <p>The toy plane features a sleek and aerodynamic design, mimicking the real-life counterparts. It may have realistic details such as wings, fuselage, landing gear, propellers, and cockpit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] md:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-full w-full rounded-2xl p-3' src={cardImage3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Passenger Plane</h2>
                        <p>The toy plane features a sleek and aerodynamic design, mimicking the real-life counterparts. It may have realistic details such as wings, fuselage, landing gear, propellers, and cockpit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] md:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-full rounded-xl p-3' src={cardImage4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Military Plane</h2>
                        <p>The toy plane features a sleek and aerodynamic design, mimicking the real-life counterparts. It may have realistic details such as wings, fuselage, landing gear, propellers, and cockpit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={cardImage5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Passenger Plane</h2>
                        <p>The toy plane features a sleek and aerodynamic design, mimicking the real-life counterparts. It may have realistic details such as wings, fuselage, landing gear, propellers, and cockpit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] md:w-96 bg-base-100 shadow-xl">
                    <figure><img src={cardImage6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fighter jet</h2>
                        <p>The toy plane features a sleek and aerodynamic design, mimicking the real-life counterparts. It may have realistic details such as wings, fuselage, landing gear, propellers, and cockpit</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;