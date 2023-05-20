/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Title/useTitle';

const AllToy = () => {
    const [toys, setToys] = useState([])
    

    const [searchText, setSearchText]=useState('')
    
    useTitle('All Toys')

    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(res => res.json())
            .then(data => {
            setToys(data)
        })
    },[])


    const handleSearch = () => {
        fetch(`http://localhost:5000/searchText?search=${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    };

    return (
        <div className='my-10'>
            <div className="form-control w-1/2 mx-auto mb-5">
                <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="search" className="input input-bordered" />
                <input onClick={handleSearch} className='btn btn-outline mx-auto mt-3 btn-warning w-[20%]' type="submit" value="Search" />
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {
                        toys.map((toy, index) => {
                            const { _id, sellerName, name, subcategory, quantity, price } = toy;
                            return <tbody key={toy._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{sellerName}</td>
                                    <td>{name}</td>
                                    <td>{subcategory}</td>
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                    <Link to={`/toyDetails/${_id}`}>
                                        <button className='btn btn-outline btn-warning'>Details</button>
                                    </Link>
                                </tr>
                            </tbody>
                        })
                    }

                </table>
            </div>
        </div>
    );
};

export default AllToy;