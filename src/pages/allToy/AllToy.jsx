/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../Title/useTitle';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authProvider/AuthProvider';

const AllToy = () => {
    const [toys, setToys] = useState([])
    const navigate = useNavigate()
    const {user}=useContext(AuthContext)


    const [searchText, setSearchText] = useState('')

    useTitle('All Toys')

    useEffect(() => {
        fetch('https://aeroplane-toy-server.vercel.app/allToy')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, []);



    const handleSearch = () => {
        fetch(`https://aeroplane-toy-server.vercel.app/searchText?search=${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    };



    const handleToyDetails = (id) => {
        console.log(id);
        if (!user) {
            Swal.fire({
                title: 'You are Not Logged In',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }

            })
        }
        else {
            navigate(`/toyDetails/${id}`)
        }

    }
        return (
            <div className='my-10'>
                <div className="form-control w-1/2 mx-auto mb-5">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="search" className="input input-bordered" />
                    <input onClick={handleSearch} className='btn btn-outline mx-auto mt-3 btn-success w-[20%]' type="submit" value="Search" />
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

                                        <button onClick={()=>handleToyDetails(`${toy._id}`)} className='btn btn-outline btn-success'>Details</button>

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