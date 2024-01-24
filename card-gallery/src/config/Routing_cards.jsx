import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import { Products } from '../components/Products'
import Data from '../pages/Data'
import Spec_Product from '../components/Spec_Product'

const Routing_cards = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path='/' element={<Data />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<Spec_Product />} />

        </Route>
    ))
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routing_cards








