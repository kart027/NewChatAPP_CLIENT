/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NavBar from './components/Navbar'





function App() {


  return (
    <> <NavBar/>

      <Container className='text-secondary'>
        <Routes>

          <Route path='/' element={<Chat />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='*' element={<chat />} />

        </Routes>
      </Container >
    
    </>
  )
}

export default App
