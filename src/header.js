import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      
    <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" style={{color:'#d50025',fontWeight:'bold',fontSize:'25px',position:'absolute',left:'5px'}}>TRU<span style={{color:'white',fontSize:'28px'}}>V</span>ETTING</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
          
           
           
         
               
           <Nav.Link> <Link to="/Appscomp">Appscomp</Link></Nav.Link>
          <Nav.Link><Link to="/App">App</Link></Nav.Link>
          <Nav.Link><Link to="/Table">Form Data</Link></Nav.Link>
              <Nav.Link href="#home">Switch Organization</Nav.Link>
              <Nav.Link href="#home">Switch to Sys Admin Role</Nav.Link>
              <Nav.Link href="#link">Tasks</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
          
        

<Outlet />

</>
)
};

export default Header;