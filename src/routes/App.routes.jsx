import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Test from '../pages/Test'
import NavBar from '../components/NavBar'
import Restaurants from '../pages/Restaurants'
import RestaurantInfo from '../pages/RestaurantInfo'
import About from '../pages/About'

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='/restaurantes' element={<Restaurants />} />
          <Route path='/restaurante/:id' element={<RestaurantInfo />} />
          <Route path='/sobre' element={<About />} />

          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes