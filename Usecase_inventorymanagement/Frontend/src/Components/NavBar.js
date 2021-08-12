import React, { useState } from 'react';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
import Logout from './Logout';
export default function NavbarCon (){
  
    return(
        <div>
           <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Inventory Management</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link><br/>
          <Logout/>
         </Nav>  
      </Navbar>        
      </div>
      
    )
}