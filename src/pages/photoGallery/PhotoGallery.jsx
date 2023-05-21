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

const photos = [
    {
        id: 1,
        url: toy1,
        name: "passenger plane"
    },
    {
        id: 1,
        url: toy2,
        name: "Fighter Jet"
    },
    {
        id: 1,
        url: toy3,
        name: "Military Plane"
    },
    {
        id: 1,
        url: toy4,
        name: "passenger plane"
    },
    {
        id: 1,
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
        name: "Passenger Plane"
    },
    {
        id: 11,
        url: toy11,
        name: "Fighter Jet"
    },
    {
        id: 12,
        url: toy12,
        name: "Military Plane"
    },
]

const PhotoGallery = () => {
    return (
        <div className='bg-green-100 p-5'>
            <h1 className='text-3xl font-bold text-center pb-3'><span className='text-green-500'>Photo</span> Gallery</h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="relative"
                    >
                        <img
                            data-aos="zoom-out"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            src={photo.url}
                            alt={photo.name}
                            className={`object-cover shadow-xl rounded-xl w-full h-full`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 text-white text-sm opacity-0 transition-opacity duration-300">
                            {photo.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// PhotoGallery.propTypes = {
//     photos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             url: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default PhotoGallery;