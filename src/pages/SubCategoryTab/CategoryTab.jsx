/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { HiStar, HiOutlineStar } from "react-icons/hi";
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const CategoryTab = () => {
    const { user } = useContext(AuthContext)

    const [tab, setTab] = useState('Military planes')
    const [toyData, setTabData] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        fetch(`https://aeroplane-toy-server.vercel.app/categoryTab/${tab}`)
            .then(res => res.json())
            .then(data => setTabData(data))
    }, [tab])

    console.log(user);
    const handleToyDetails = (id) => {

        if (!user?.email) {
            Swal.fire(
                'You Are Now LogIn Page',
                'That thing is still around?',
                'success'
            )
        }

    }


    return (
        <div className='my-10 bg-green-100 rounded-xl px-4'>
            <h1 className='text-center text-3xl font-semibold pt-5 my-5'>Sub Category <span className='text-green-500'>Toy</span></h1>
            <Tabs>
                <TabList className=' justify-center md:gap-5 md:flex'>
                    <Tab onClick={() => setTab('Military planes')} className='border-green-500 cursor-pointer border-2 rounded-lg py-2 px-3'>Military Planes</Tab>
                    <Tab onClick={() => setTab('passenger palne')} className='border-green-500 md:my-0 my-3 cursor-pointer border-2 rounded-lg py-2 px-3'>Passengers Planes</Tab>
                    <Tab onClick={() => setTab('Fighter jets')} className='border-green-500 cursor-pointer border-2 rounded-lg py-2 px-3'>Fighter Jet</Tab>
                </TabList>

                <div className='mt-10'>
                    <TabPanel className='grid md:grid-cols-3 gap-5 pb-16 md:gap-3 grid-cols-1'>
                        {
                            // touao
                            toyData.map(toy =>
                                <div key={toy._id} className="card w-[355px] md:w-96 bg-base-100 shadow-xl"
                                    data-aos='fade-up'
                                >
                                    <figure className="px-10 pt-10">
                                        <img src={toy.image} alt="Military Planes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body ">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <p>${toy.price}</p>
                                        <Rating
                                            className='text-yellow-500'
                                            readonly
                                            placeholderRating={toy.rating}
                                            emptySymbol={<HiOutlineStar />}
                                            placeholderSymbol={<HiStar />}
                                            fullSymbol={<HiStar />}
                                        />
                                        <div className="card-actions">
                                            <Link to={`/toyDetails/${toy._id}`}>
                                                <button onClick={handleToyDetails} className="btn btn-primary">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </TabPanel>
                    <TabPanel className='grid md:grid-cols-3 gap-5 pb-16 md:gap-3 grid-cols-1'>
                        {
                            toyData.map(toy =>
                                <div key={toy._id} className="card w-[355px] md:w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={toy.image} alt="Military Planes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body ">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <p>${toy.price}</p>
                                        <Rating
                                            className='text-yellow-500'
                                            readonly
                                            placeholderRating={toy.rating}
                                            emptySymbol={<HiOutlineStar />}
                                            placeholderSymbol={<HiStar />}
                                            fullSymbol={<HiStar />}
                                        />
                                        <div className="card-actions">
                                            <button onClick={() => handleToyDetails(toy._id)} className="btn btn-primary">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </TabPanel>
                    <TabPanel className='grid md:grid-cols-3 gap-5 pb-16 md:gap-3 grid-cols-1'>
                        {
                            toyData.map(toy =>
                                <div key={toy._id} className="card w-[355px] md:w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={toy.image} alt="Military Planes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body ">
                                        <h2 className="card-title">{toy.name}</h2>
                                        <p>${toy.price}</p>
                                        <Rating
                                            className='text-yellow-500'
                                            readonly
                                            placeholderRating={toy.rating}
                                            emptySymbol={<HiOutlineStar />}
                                            placeholderSymbol={<HiStar />}
                                            fullSymbol={<HiStar />}
                                        />
                                        <div className="card-actions">
                                            <button onClick={() => handleToyDetails(toy._id)} className="btn btn-primary">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default CategoryTab;