/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import Swal from 'sweetalert2';
import useTitle from '../../../Title/useTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    useTitle('My Toy')

    const [reload, setReload] = useState(false)
    const [toys, setToys] = useState([])
    const [sortBy, setSortBy] = useState('')




    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setReload(!reload)
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    useEffect(() => {
        let apiUrl = `http://localhost:5000/myToy/${user?.email}`;
        if (sortBy) {
            apiUrl += `?sortBy=${sortBy}`;
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                const parsedData = data.map(toy => ({
                    ...toy,
                    price: parseInt(toy.price),
                }));

                if (sortBy === 'lower') {
                    parsedData.sort((a, b) => b.price - a.price);
                } else if (sortBy === 'higher') {
                    parsedData.sort((a, b) => b.price - a.price);
                }

                setToys(parsedData)
            })
    }, [user, reload, sortBy])


    const handleSortByChange = e => {
        setSortBy(e.target.value)
    }


    return (
        <div className='my-10'>
            <div className="overflow-x-auto">
                <div className='flex justify-end mb-12'>
                    <select value={sortBy} onChange={handleSortByChange}
                        className='border-2 p-2 border-success'
                    >
                        <option value="">Sort By</option>
                        <option value="lower">Lower Price</option>
                        <option value="higher">Higher Price</option>
                    </select>
                </div>
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
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        toys.map((toy, index) => {
                            const { _id, sellerName, name, subcategory, quantity, price } = toy;
                            return <tbody key={_id}>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{sellerName}</td>
                                    <td>{name}</td>
                                    <td>{subcategory}</td>
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                    <Link to={`/updateToy/${_id}`}>
                                        <td className='cursor-pointer'><BiEdit /></td>
                                    </Link>
                                    <td onClick={() => handleDelete(_id)} className='cursor-pointer text-red-500 w-10'><RiDeleteBin6Fill /></td>
                                </tr>
                            </tbody>
                        })
                    }

                </table>
            </div>
        </div>
    );
};

export default MyToys;