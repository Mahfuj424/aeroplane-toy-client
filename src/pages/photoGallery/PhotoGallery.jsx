/* eslint-disable no-unused-vars */
import React from 'react';
import toy1 from '../../assets/gallery/toy1.jpg'
import toy2 from '../../assets/gallery/toy2.jpg'
import toy3 from '../../assets/gallery/toy3.jpg'
import toy4 from '../../assets/gallery/toy4.jpg'
import toy5 from '../../assets/gallery/toy5.jpg'
import toy6 from '../../assets/gallery/toy6.jpg'
import toy7 from '../../assets/gallery/toy7.jpg'
import toy8 from '../../assets/gallery/toy8.jpg'
import toy9 from '../../assets/gallery/toy9.jpg'
import toy10 from '../../assets/gallery/toy10.jpg'
import toy11 from '../../assets/gallery/toy11.jpg'
import toy12 from '../../assets/gallery/toy12.jpg'

import './styles.css'

const photos = [
    {
        id: 1,
        url: toy1,
        name: "passenger plane"
    },
    {
        id: 2,
        url: toy2,
        name: "passenger plane"
    },
    {
        id: 3,
        url: toy3,
        name: "passenger plane"
    },
    {
        id: 4,
        url: toy4,
        name: "passenger plane"
    },
    {
        id: 5,
        url: toy5,
        name: "Fighter Jet"
    },
    {
        id: 6,
        url: toy6,
        name: "Military Plane"
    },
    {
        id: 7,
        url: toy7,
        name: "Passenger Plane"
    },
    {
        id: 8,
        url: toy8,
        name: "Fighter Jet"
    },
    {
        id: 9,
        url: toy9,
        name: "Military Plane"
    },
    {
        id: 10,
        url: toy10,
        name: "Military Plane"
    },
    {
        id: 11,
        url: toy11,
        name: "Passenger Plane"
    },
    {
        id: 12,
        url: toy12,
        name: "Military Plane"
    },
]

const PhotoGallery = () => {
    return (
        <div className='bg-green-100 p-5 my-10 rounded-xl'>
            <h1 className='text-3xl font-bold text-center pb-3'><span className='text-green-500'>Photo</span> Gallery</h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="relative card-hover"
                    >
                        <img
                            data-aos="zoom-out"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            src={photo.url}
                            alt={photo.name}
                            className={`object-cover shadow-xl relative rounded-xl w-full h-full`}
                        />
                        <div className="absolute top-2 left-20 right-5 p-2  font-bold text-black text-xl transition-opacity duration-300">
                            <h3 className='opacity-0'>{photo.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;