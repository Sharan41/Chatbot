import logo from './logo.svg';

import './App.css';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {ChevronLeft} from  'react-bootstrap-icons';
import { ChevronRight } from 'react-bootstrap-icons';
import Appscomp from './Appscomp';
import Header from './header';

import { Outlet, Link, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';




    import React from 'react';
    import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Card from 'react-bootstrap/Card';
    import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardBody from 'react-bootstrap/CardBody';
import Pagination from 'react-bootstrap/Pagination';
import CardGroup from 'react-bootstrap/CardGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Chatbot from 'react-simple-chatbot';




    
    function App() {
      const steps = [
        {
          id: '0',
          message: 'Welcome to react chatbot!',
          trigger: '1',
        },
        {
          id: '1',
          message: 'Bye!',
          end: true,
        },
      ];
      
 

 
<div>
    <Chatbot steps={steps} />
  </div>
      const active = 2;
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  

  // Customize cards data
  const cardsData = [
    {
      title: 'TODO',
      text: <><Card className='task'><span style={{ fontWeight: 'bold', color: '#000505' }}>Task that are due for action wil appear here.</span><br/><div style={{ color: '#afb6c8' }}>Due in no.days</div><button className='butt'>New</button></Card></>,
      bg: 'info',
      imgSrc: 'holder.js/100px160'
    },
    {
      title: 'Subject Compilance',
      text: <table className="table table-borderless ">
      <thead>
        <tr>
          <th scope="col">Compliance Requirements</th>
          <th scope="col">#Compilants</th>
          <th scope="col">Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr className='tabla'>
          <td>
          Anual Insider Threat Briefing
          </td>
          <td>0/5

          </td>
          <td><ProgressBar now={0} /></td> 
        </tr>
        <tr className='tabla'>
          <td>
            
          Anual Security Briefing
              </td>
              <td>0/5</td>
              <td><ProgressBar now={0} /></td>

        </tr>
        <tr className='tabla'>
          <td>Citizenship Verification</td>
          <td>0/5</td>
          <td><ProgressBar now={0} /></td>
        </tr>
        <tr className='tabla'>
          <td>Cyber Awareness Training</td>
          <td>0/5</td>
          <td><ProgressBar now={0} /></td>
        </tr>
        <tr className='tabla'>
          <td>DD-441</td>
          <td>4/5</td>
          <td><ProgressBar now={80} /></td>
        </tr>
      </tbody>
    </table>,
      bg: 'info',
      imgSrc: 'holder.js/100px160'
    },
    {
      title: 'Notification Overview',
      text: <table className='table  table-borderless' style={{fontSize:'14px'}}>
        <thead><tr>
          <th></th>
          <th></th>
          <th></th></tr></thead>
          <tbody>
            <tr>
              <td>6/4/2024 <br/>7:21:14 PM</td>
              <td></td>
              <td><span style={{color:'#b9b2c7'}}>Subject </span> K ,Jeyan <span style={{color:'#b9b2c7'}}>reported Marital Status Change.Go to </span>Task</td>
            </tr>
            <tr><td>6/4/2024 <br/>7:19:37 PM</td>
            <td></td>
            <td><span style={{color:'#b9b2c7'}}>Subject</span> K, Jeyan <span style={{color:'#b9b2c7'}}>reported Cohabitant.Go to </span>Task</td>
            </tr>
          </tbody>
      </table>,
      bg: 'info',
      imgSrc: 'holder.js/100px160'
    },
    {
      title: 'Tasks Overview',
      text: <table className='table table-striped'>
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
            <tr><td>Bharath<br/><span style={{color:'#afb6c8'}}>4/22/2024</span></td>
            <td> <ProgressBar variant="success" now={100} label={`100%`} />
</td>

            </tr>
            <tr><td>Bharath<br/><span style={{color:'#afb6c8'}}>4/22/2024</span></td>
            <td> <ProgressBar variant="success" now={0} label={`0%`} />
</td>
            </tr>
            <tr><td>Bharath<br/><span style={{color:'#afb6c8'}}>3/20/2024</span></td>
            <td> <ProgressBar variant="success" now={0} label={`0%`}/>
</td>
            </tr>
            <tr><td>Bharath<br/><span style={{color:'#afb6c8'}}>3/19/2024</span></td>
            <td> <ProgressBar variant="success" now={100} label={`100%`}/>
            
</td></tr>


          </tbody>
      </table>,

      bg: 'info',
      imgSrc: 'holder.js/100px160'
    }
  ];

  return (
    
   
    
    <div className='d-flex flex-column'>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" style={{color:'#d50025',fontWeight:'bold',fontSize:'25px',position:'absolute',left:'5px'}}>TRU<span style={{color:'white',fontSize:'28px'}}>V</span>ETTING</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
          
           
           
         
               

            
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
      <div className='d-flex'>
        <Nav defaultActiveKey="/home" className="flex-column custom-navbar2" style={{fontWeight:'bold'}}>
          <Navbar.Brand href="#home">APPSCOMP</Navbar.Brand>
          <Nav.Link href="/home" style={{backgroundColor:'#0054ac',color:'black'}}>Dashboard</Nav.Link>
          <Nav.Link eventKey="link-1">Locations</Nav.Link>
          <Nav.Link eventKey="link-2">Documents</Nav.Link>
          <Nav.Link eventKey="link-2">Contracts</Nav.Link>
          <Nav.Link eventKey="link-2">Tasks</Nav.Link>
          <Nav.Link eventKey="link-2">Screenings</Nav.Link>
          <Nav.Link eventKey="link-2">Assets</Nav.Link>
          <Nav.Link eventKey="link-2">Document Control</Nav.Link>
          <Nav.Link eventKey="link-2">Visit Requests</Nav.Link>
          <Nav.Link eventKey="link-2">Visits</Nav.Link>
          <Nav.Link eventKey="link-2">Subjects</Nav.Link>
          <Nav.Link eventKey="link-2">Reports</Nav.Link>
          <Nav.Link eventKey="link-2">Users</Nav.Link>
          <Nav.Link eventKey="link-2">Service Center</Nav.Link>
          <Nav.Link eventKey="link-2">Settings</Nav.Link>
        </Nav>
        <div className='content'>
          <Card >
         
          <CardGroup>
         <Card className='bluebg' text='white'  style={{ height: '12rem' }}>
        
        <Card.Body>
          <Card.Title style={{margin:'7px'}}>Location Compliance Summary</Card.Title>
          <ProgressBar variant="success" now={0} />

          <Card.Text  style={{fontSize:'14px',margin:'8px',padding:'5px'}}>
            Total Locations: 3 <br/>
          Compliant Entity=0 <br/>
          Non Compliant Entity=3
          
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='bluebg' text='white'  style={{ height: '12rem' }}>
        
        <Card.Body>
          <Card.Title  style={{margin:'7px'}}>Subject Compilance Summary</Card.Title>
          <ProgressBar variant="success" now={25} />
          <Card.Text style={{fontSize:'14px',margin:'8px',padding:'5px'}}>
           
              Total Subjects: 5<br/>
              Total Subject by Eligibility: Uncleared: 5<br/>
              Subject by Access:<br/>
              Subjects by Compliance: Compliant: 0, Non-Compliant: 5
          </Card.Text>
        </Card.Body>
       
      </Card>
      </CardGroup>
            
      <Row xs={1} md={2} className="g-4">
              {cardsData.map((card, idx) => (
                <Col key={idx}>
                  <Card className='black-bg' style={{ height: '25rem', margin: '10px' }}>
                    
                    <Card.Body as="div">
                      <Card.Title>{card.title}</Card.Title>
                      <Card bg='light' style={{ height: '17rem' }}>
                        <Card.Text>
                          {card.text} 
                        </Card.Text>
                      </Card>
                      {idx === 0 ? (
                        <>
                        <p style={{position:'absolute',left:'20px',bottom:'3px',fontSize:'12px'}}>Total * Items</p>
                        <ChevronRight style={{position:'absolute',right:'50px',backgroundColor:'white',bottom:'20px'}}></ChevronRight>
                        <p style={{position:'absolute',right:'70px',bottom:'3px',fontSize:'12px'}}>*Of*</p>
                       <ChevronLeft style={{position:'absolute',right:'100px',backgroundColor:'white',bottom:'20px'}}></ChevronLeft>

                        </>
                      ) : (
                        <>
                      
                        <DropdownButton id="dropdown-basic-button" title="5" className="dropdown-bottom-left" >
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                     
                    
                    <Pagination size="sm" className="pagination-bottom-right">
                      {items}
                    </Pagination>
                    </>
                      )}
                      </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </div>
        
        
      </div>
      
      <div>
     
      <footer className="footer mt-auto py-3 bg-light">
        <Container>
        
        </Container>
      </footer>
      </div>
      
      
      
    </div>
    
   
    
     
    
    );
    }
    
    export default App;
    
