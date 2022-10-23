import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import CategoryNews from '../../pages/CategoryNews/CategoryNews';
import Home from '../../pages/Home/Home';
import Login from '../../pages/login/Login/Login';
import News from '../../pages/News/News';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import Register from '../../pages/login/Register/Register'
import TermsAndConditions from '../../pages/others/TermsAndConditions/TermsAndConditions';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/news"),
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CategoryNews></CategoryNews>
            },
            {
                path: "/news/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])
