/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../Title/useTitle';
import { AuthContext } from '../../authProvider/AuthProvider';
import AllToy from '../allToy/AllToy';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const [toys, setToys]=useState([])

    useEffect(() => {
        fetch('https://aeroplane-toy-server.vercel.app/addToy')
            .then(res => res.json())
            .then(data => console.log(data))
    },[])

    useTitle('Add Toy')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(image, name, sellerEmail, sellerName, subcategory, price, rating, quantity, description);
        const addToy = {image, name, sellerEmail, sellerName, subcategory, price, rating, quantity, description}


        fetch('https://aeroplane-toy-server.vercel.app/allToy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if(data.insertedId){
                  return  Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div>
            {
                toys.map(toy=> <AllToy key={toy._id} toy={toy}></AllToy>)
            }
            <form onSubmit={handleSubmit} className='bg-green-100 my-10 p-5 rounded-xl shadow-md'>
                <div className="flex w-full gap-5 mx-auto ">
                    <div className='w-1/2'>
                        <div className="mb-4 ">
                            <label htmlFor="image" className="block mb-2">Image:</label>
                            <input type="text" name="image" id="image"  className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name:</label>
                            <input type="text" name="name" id="name"  className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="sellerName" className="block mb-2">Seller Name:</label>
                            <input type="text" name="sellerName" id="sellerName" readOnly defaultValue={user?.displayName}  className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="sellerEmail" className="block mb-2">Seller Email:</label>
                            <input type="email" name="sellerEmail"  id="sellerEmail" readOnly defaultValue={user?.email}  className="border rounded py-2 px-3 w-full" />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-4">
                            <label htmlFor="subcategory" className="block mb-2">Subcategory:</label>
                            <select name="subcategory" id="subcategory"  className="border rounded py-2 px-3 w-full">
                                <option value="Military planes">Military planes</option>
                                <option value="passenger palne">Passenger Plane</option>
                                <option value="Fighter jets">Fighter jets</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block mb-2">Price:</label>
                            <input type="number" name="price" id="price"  className="border rounded py-2 px-3 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className="block mb-2">Rating:</label>
                            <input type="number" name="rating" id="rating" min="0" max="5" step="0.1"  className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="quantity" className="block mb-2">Available Quantity:</label>
                            <input type="number" name="quantity" id="quantity"  className="border rounded py-2 px-3 w-full" />
                        </div>


                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2">Description:</label>
                    <textarea name="description" id="description" rows="4" cols="50"  className="border rounded py-2 px-3 w-full"></textarea>
                </div>
                <div className="mb-4 text-center">
                    <button type="submit" className="btn  btn-success">Upload</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;