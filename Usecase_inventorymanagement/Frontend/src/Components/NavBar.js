import React from 'react';
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
export default function NavbarCon(){
    return(
        <div>
           <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Inventory Management</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link><br/>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/userdashboard">User Dashboard</Nav.Link>
         </Nav>  
      </Navbar>        
      </div>
      
    )
}