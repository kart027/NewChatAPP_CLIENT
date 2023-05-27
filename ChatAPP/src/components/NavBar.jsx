/* eslint-disable no-unused-vars */
import React from 'react'
import {Container,Navbar,Nav,Stack} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return(
  <>
 <Navbar bg='dark' className='mb-4' style={{height:"3.75rem"}}>
    <Container>
        <h2>
          <Link to="/"  className='link-light text-decoration-none'>ChatAPP</Link>
        </h2>
        <span className='text-warning'>logged in as charles</span>
        <Nav>
            <Stack direction='horizontal' gap={3}>
          <Link to="/login" className='link-light text-decoration-none'>login</Link>  
            <Link to="/register" className='link-light text-decoration-none'>Register</Link>  
            </Stack>
        </Nav>
    </Container>
  </Navbar>
  </>
)}

export default NavBar
