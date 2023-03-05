import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Router, Route } from "react-router-dom"
import Username from './components/Username'
import Password from './components/Password'
import Register from './components/Register'
import Profile from './components/Profile'
import Recovery from './components/Recovery'
import Reset from './components/Reset'
import PageNotFound from './components/PageNotFound'
import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import Map from './components/Map'
import Spline from '@splinetool/react-spline';
import Home from './components/Home'
import MyForm from './components/MyForm'
import Face from './components/Face'

// root routes

const router = createBrowserRouter([
    {
        path : "/",
        element : <Username />
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/password",
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : "/profile",
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : "/recovery",
        element : <Recovery />
    },
    {
        path : "/reset",
        element : <Reset />
    },
    {
        path : "*",
        element : <PageNotFound />
    },
    {
        path : "/map",
        element : <Map />
    },
    {
        path : "/home",
        element : <Home />
    },
    {
        path : "/face",
        element : <Face />
    },
    {
        path : "/chat",
        element : <MyForm />
    }
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
