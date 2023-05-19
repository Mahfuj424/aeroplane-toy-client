/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToy = () => {
    const toys = useLoaderData()
    console.log(toys);


    const toyDetails = (id) => {
        console.log(id);
    }

    return (
        <div className='my-10'>
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
                            const {_id, sellerName, name, subcategory, quantity, price } = toy;
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