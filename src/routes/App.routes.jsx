import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Test from '../pages/Test'
import NavBar from '../components/NavBar'

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='/restaurantes' element={<Test />} />
          <Route path='/restaurante/:id' element={<Test />} />
          <Route path='/sobre' element={<h2>About</h2>} />

          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes