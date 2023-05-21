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
import PrivetRoute from '../pages/privetRoute/PrivetRoute';
import Blog from '../pages/Blog/Blog';

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
                element: <PrivetRoute><AddToy/></PrivetRoute>
            },
            {
                path: 'allToys',
                element: <AllToy />,
            },
            {
                path: 'toyDetails/:id',
                element: <PrivetRoute><ToyDetails /></PrivetRoute>,
                loader: ()=> fetch(`https://aeroplane-toy-server.vercel.app/allToy`)
            },
            {
                path: 'myToys',
                element: <PrivetRoute><MyToys/></PrivetRoute>
            },
            {
                path: 'updateToy/:id',
                element: <UpdateToy />,
                loader: ({params})=> fetch(`https://aeroplane-toy-server.vercel.app/updateToy/${params.id}`)
                
            },
            {
                path: 'blog',
                element: <Blog/>
            }

        ]
    },
]);

export default Router;