import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      
    <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" style={{color:'#d50025',fontWeight:'bold',fontSize:'25px',position:'absolute',left:'5px'}}>CHATBOT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
          
           
           
         
               
          
          <Nav.Link style={{color:'#d50025',fontWeight:'bold',fontSize:'25px',position:'absolute',left:'5px'}}><Link to="/chatbot">Chatbot UI</Link></Nav.Link>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
          
        

<Outlet />

</>
)
};

export default Header;
