import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Individual from '../../Pages/Individual/Individual'
import Product from '../../Pages/Product/Product'

const AllRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Product />}></Route>
      <Route path={'/products/:id'} element={<Individual />}></Route>
    </Routes>
  )
}

export default AllRouter
