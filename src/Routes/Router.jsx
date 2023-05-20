/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/Home/signup/Register';
import ErrorPage from '../ErrorPage/ErrorPage';
import AddToy from '../pages/AddToy/AddToy';
import AllToy from '../pages/allToy/AllToy';
import ToyDetails from '../ErrorPage/ToyDetails/ToyDetails';
import MyToys from '../pages/myToys/MyToys';
import UpdateToy from '../pages/UpdateToy/UpdateToy';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>,
            },
            {
                path: 'addToy',
                element: <AddToy/>
            },
            {
                path: 'allToys',
                element: <AllToy />,
            },
            {
                path: 'toyDetails/:id',
                element: <ToyDetails />,
                loader: ()=> fetch(`http://localhost:5000/allToy`)
            },
            {
                path: 'myToys',
                element: <MyToys/>
            },
            {
                path: 'updateToy/:id',
                element: <UpdateToy />,
                loader: ({params})=> fetch(`http://localhost:5000/updateToy/${params.id}`)
                
            }
        ]
    },
]);

export default Router;