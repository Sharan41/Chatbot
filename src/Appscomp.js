import React from 'react'
import { CarouselCaption, Nav } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Navbar, Container,  NavDropdown } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import {Dropdown,  DropdownButton} from 'react-bootstrap';  
import image1jpg from './images/image1.jpg';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardBody from 'react-bootstrap/CardBody';
import Pagination from 'react-bootstrap/Pagination';
import CardGroup from 'react-bootstrap/CardGroup';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import client from './images/client.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import footer from './images/footer.png';
import { Formik, Field,  ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import Table from 'react-bootstrap/Table';
 import DataTable from './Table';
 import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

 import { useNavigate } from 'react-router-dom';
import axios from 'axios';



 



 
export const MyForm=()=>{
  
    const [Fname, setFName] = useState('');
    const [Lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [message, setMessage] = useState('');
    const navigate= useNavigate();
 
    // Event handlers to update state variables
    const handleFNameChange = (event) => {
        setFName(event.target.value);
    };
    const handleLNameChange = (event) => {
        setLName(event.target.value);
    };

 
 
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlephoneChange = (event) => {
        setphone(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
 
 
 
 
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5001/register', {
            method: "post",
            body: JSON.stringify({ Fname,Lname, email,phone,message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
       
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setFName("");
            setLName("");
            setphone("");
            setMessage("");
           
            navigate('/Table');
        }
       
    }
 
    return (
        <div className="form-container">
            
            <form >
            <div className='d-flex flex-row'>

                <div className="name-field">
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={Fname}
                        onChange={handleFNameChange}
                    />
                </div>
                <div className="name-field">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={Lname}
                        onChange={handleLNameChange}
                    />
                </div>
                </div>
                <div className='d-flex flex-row'>

                <div className="name-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="name-field">
                    <label>Phone number:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={handlephoneChange}
                    />
                </div>
                </div>
                <div className='d-flex flex-column'>
                <div className="message-field">
                    <label>Message:</label>
                    <input
                        type="text"
                        style={{height:'80px'}}
                        value={message}
                        onChange={handleMessageChange}
                    />
                </div>
                <div>

                <button className="btn btn-danger" type="submit" onClick={handleOnSubmit}>Submit</button>
                </div>
                </div>
            </form>
        </div>
    );
          
        
}


 export default function Appscomp(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState([]);
    
    
     return(
         <>
         <div className='bg-container'>
          <Navbar expand="lg" className="appscomp-navbar">
        <Container>
          <Navbar.Brand href="#home">APPSCOMP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
          
           
           
         
               
          
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#home">ABOUT US</Nav.Link>
              <Nav.Link href="#link">PRODUCTS</Nav.Link>
              <Nav.Link href="#link">SERVICES</Nav.Link>
              <Nav.Link href="#link">CAREERS</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
              <Nav.Link><Search/></Nav.Link>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://appscomp.com/wp-content/uploads/revslider/video-media/Untitled-design-4-1_12.jpeg"
                        alt="First slide"
                        height="800px"
                    />
                    <Carousel.Caption className='slider-text-head '>
                        <div className='carhead'>
                        <h1  >DIGITAL MARKETING</h1>
                        <p >AppsComp specializes in digital marketing to promote your products on the web</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://appscomp.com/wp-content/uploads/revslider/video-media/Untitled-design-5_13.jpeg"
                        alt="Second slide"
                        height="800px"
                    />
                    <Carousel.Caption className='slider-text-head '>
                    <div className='carhead'>
                        <h1>E-COMMERCE WEB DESIGN</h1>
                        <p>A good e-commerce website should be user friendly and dynamic to meet ever changing needs of market</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://appscomp.com/wp-content/uploads/2023/07/Odoo-Banner-1.png"
                        alt="Third slide"
                        height="800px"
                    />
                    <Carousel.Caption className='slider-text-head '>
                   
                        <p className='carhead'>Looking for a customized fully functional ERP with integration,then ODOO is the answer for your search</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
            <div className='para-1 d-flex flex-column' >
                <div className='margin'>
               <h1 className='head'>Why <span style={{color:'red'}}>AppsComp</span></h1>
               </div>
                <h1 className='head2' >"Because Customer is King"</h1>
                <div className='d-flex flex-row'>
                    <div className='mini-card'>
                        <h1 className='head'>What we offer</h1>
                       
                        <p className='mini-para'>"At AppsComp Widgets, we offer customized solutions tailored to meet our clients' specific needs. We offer Odoo Implementation and consulting services [Odoo ERP implementation, Odoo POS software, & Odoo Migration] to both Indian and Global business organizations. We are one of the Top 5 Odoo software implementation and customization companies in Coimbatore. Our team has over 20 years of cumulative experience in all the verticals we provide service; especially in Odoo POS and Odoo ERP. Furthermore, we are the best software company for Odoo point-of-sale in Coimbatore.</p><p className='mini-para'>
                        
We value our customers and believe that they are the most important aspect of our business. Our services are cost-effective and of high quality, making us a desirable choice. We work during U.S. and IST hours to ensure that we deliver within the agreed timeframe. When you choose AppsComp, you can expect quality, support, affordable costs, and reliability." Additionally, AppsComp is one of the top 10 Odoo companies and listed in the Best Odoo Companies in India. We provide Odoo Software for Indian Manufacturing Companies also we do Amazon Seller Account Management Services in Coimbatore.</p>

<DropdownButton  className='m-2' variant="danger" id="dropdown-basic-button" title="View More" drop="end">  
    <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
</DropdownButton>  
                    </div>
                    <div className='image'>
                    <img className='mini-img' src={image1jpg}></img>
                </div>
                </div>
            </div>
          
            <Card  className='cards-new-container'>
            <Card.Img style={{height:'550px'}}variant="top" src="https://appscomp.com/wp-content/uploads/revslider/video-media/Untitled-design-4-1_12.jpeg" />
            <Card.ImgOverlay>
                <Card.Body>
             
    <CardGroup>
      <Card bg='light' className='four-cards'>
       
        <Card.Body>
            <img style={{marginLeft:'100px' }}src='https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2023/07/icons8-web-marketing-64.png'></img>
          <Card.Title className='card-title-appscomp'><span style={{color:'red'}}>Od</span>oo</Card.Title>
          <Card.Text style={{margin:'30px'}}>
          AppsComp, a premier Odoo software implementation company in Coimbatore, specializes in Odoo point-of-sale (POS) making it the top ERP development company in the region. 
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card bg='light' className='four-cards'>
        
      <Card.Body>
            <img style={{marginLeft:'100px' }}src='https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2023/07/icons8-email-marketing-64-1-1.png'></img>
          <Card.Title className='card-title-appscomp'><span style={{color:'red'}}>E-Commerce </span>Web Design.
</Card.Title>
          <Card.Text style={{margin:'30px'}}>
          AppsComp's expertise in e-commerce web applications. Our comprehensive web design services cater to SMEs and large enterprises, ensuring a visually appealing and user-friendly interface,
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg='light' className='four-cards'>
       
      <Card.Body>
            <img style={{marginLeft:'100px' }}src='https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2023/07/icons8-web-design-64-3.png'></img>
          <Card.Title className='card-title-appscomp'><span style={{color:'red'}}>Digital</span> Marketing</Card.Title>
          <Card.Text style={{margin:'30px'}}>
          AppsComp is an expert in digital marketing and can help you advertise your items online.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card bg='light' className='four-cards'>
      <Card.Body>
            <img style={{marginLeft:'100px' }}src='https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2023/07/icons8-support-64.png'></img>
          <Card.Title className='card-title-appscomp'><span style={{color:'red'}}>Call</span> Center</Card.Title>
          <Card.Text style={{margin:'30px'}}>
          With a cumulative experience of 15+ years, our Call Centre Management team has always delivered top results.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>

               
                   
                </Card.Body>
                </Card.ImgOverlay>

         
        
       
       
       
     </Card>
     <h1 className='newhead'><span style={{color:'red'}}>See what our</span> clients say about us</h1>
     <div className='clients-bg d-flex align-items-center  
                        justify-content-center'>
                            <Card className='center-card shadow p-3 mb-5 bg-white rounded'> 
                           
                <Card.Body> 
                <Carousel  > 
        <Carousel.Item interval={1000}> 
        <div className='d-flex flex-row' > 
                    <div style={{textAlign:'center',left:'0px'}}>
                        <img src="https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2024/05/image-14.png?time=1717696108"></img>
                        <h1  className="card-title2"> 
                        Tajwali Khan Sultan
                        </h1> 
                        <h1 className='card-sub-title2'>AWPRO,UAE</h1>

                        </div>
                        <div>
                        <p className="card-test-text"> 
                        "Thank you for the insightful meeting and the clarity you provided on our discussion. It's evident that the app is accurately generating reports, as it considers the actual purchase dates. Your prompt response and ongoing support are greatly appreciated. Thank you once again!"</p>
                        </div>
     </div>
        </Carousel.Item> 
        <Carousel.Item interval={1000}> 
        <div className='d-flex flex-row' > 
                    <div style={{textAlign:'center',left:'0px'}}>
                        <img src="https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2024/05/image-14.png?time=1717696108"></img>
                        <h1  className="card-title2"> 
                        Dr.Senthilkumar Raju
                        </h1> 
                        <h1 className='card-sub-title2'>Atlas Pain Care, Coimbatore</h1>

                        </div>
                        <div>
                        <p className="card-test-text"> 
                        "We are appreciative of Praveen and Appscomp for their unwavering support at all times. We found the software programs Crown Star and Atlas Pain Care to be quite helpful. He was always available, friendly, and competent in attending to our clinic's needs. It gives us great pleasure to work with you</p>
                        </div>
     </div>
        </Carousel.Item> 
        <Carousel.Item interval={1200}> 
        <div className='d-flex flex-row' > 
                    <div style={{textAlign:'center',left:'0px'}}>
                        <img src="https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2024/05/image-14.png?time=1717696108"></img>
                        <h1  className="card-title2"> 
                        Satheeshkumar T
                        </h1> 
                        <h1 className='card-sub-title2'>SRP Logistics, Pollachi</h1>

                        </div>
                        <div>
                        <p className="card-test-text"> 
                        AppsComp's Widgets made a big difference for our logistics business. The team's skill and commitment were amazing for our project and they really took the time to understand what we wanted and gave us a good Fleet Management software solution.</p>
                        </div>
     </div>
        </Carousel.Item> 
      </Carousel> 
                   {/* <div className='d-flex flex-row' > 
                    <div style={{textAlign:'center'}}>
                        <img src="https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2024/05/image-14.png?time=1717696108"></img>
                        <h1  className="card-title2"> 
                        Tajwali Khan Sultan
                        </h1> 
                        <h1 className='card-sub-title2'>AWPRO,UAE</h1>

                        </div>
                        <div>
                        <p className="card-text"> 
                        "Thank you for the insightful meeting and the clarity you provided on our discussion. It's evident that the app is accurately generating reports, as it considers the actual purchase dates. Your prompt response and ongoing support are greatly appreciated. Thank you once again!"</p>
                        </div>
     </div> */}
                </Card.Body> 
            </Card> 
           
                        </div>
                        <div className='dropdown-appscomp'>
                        <DropdownButton  className='m-2 ' variant="danger" id="dropdown-basic-button" title="View More Clients" drop="end">  
    <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
</DropdownButton>  
</div>


<Card className='cards-new-conatiner-high'   >
<h1 className='head-high'><span style={{color:'red'}}>We </span> Specialize  In</h1>
<Card className='high-card-container' >
      <Card.Img src="https://tgf4f0.n3cdn1.secureserver.net/wp-content/uploads/2023/07/Tech-Logos-1-1.png"></Card.Img>
</Card>
</Card>
<Card  className='cards-new-container '>
            <Card.Img style={{height:'350px'}}variant="top" src="https://appscomp.com/wp-content/uploads/revslider/video-media/Untitled-design-4-1_12.jpeg" />
            <Card.ImgOverlay>
                <Card.Body>
             
    <CardGroup>
      <Card  className='four-cards bg-transparent'>
       
        <Card.Body>
            <img style={{height:'70px',width:'70px',marginLeft:'100px'}}src={icon1}></img>
            <Card.Title className='card-title-low'><span style={{fontWeight:'bold',fontSize:'30px'}}>5 </span><br/>Countries.
</Card.Title>
        </Card.Body>
        
      </Card>
      <Card  className='four-cards bg-transparent'>
        
      <Card.Body>
            <img style={{height:'70px',width:'70px',marginLeft:'100px'}}src={icon2}></img>
          <Card.Title className='card-title-low'><span style={{fontWeight:'bold',fontSize:'30px'}}>7 </span><br/>Years Of Experience.
</Card.Title>
          
        </Card.Body>
      </Card>
      <Card  className='four-cards bg-transparent'>
       
      <Card.Body>
            <img style={{height:'70px',width:'70px',marginLeft:'100px'}}src={icon3}></img>
            <Card.Title className='card-title-low'><span style={{fontWeight:'bold',fontSize:'30px'}}>50+</span><br/>No Of Customers.
</Card.Title>
        </Card.Body>
        
      </Card>
      <Card  className='four-cards bg-transparent'>
      <Card.Body>
            <img style={{height:'70px',width:'70px',marginLeft:'100px'}}src={icon4}></img>
            <Card.Title className='card-title-low'><span style={{fontWeight:'bold',fontSize:'30px'}}>45+ </span><br/>No Of Employees.
</Card.Title>
         
        </Card.Body>
      </Card>
    </CardGroup>

               
                   
                </Card.Body>
                </Card.ImgOverlay>

         
        
       
       
       
     </Card>
     <div className='d-flex flex-row'>
         <div>
         <Card className='client-card'>
             
             <Card.Body>
             <Card.Title><h1 className='head-client'><span style={{color:'red'}}>OUR </span>CLIENTS</h1></Card.Title>
                 <Card.Text style={{marginTop:'30px',marginBottom:'30px'}}>We believe in not just providing a service to our clients but also forming a relationship based on understanding their needs and then developing it.</Card.Text>
                 <img height="300px" width="600px" src={client}></img>
             </Card.Body>



         </Card>
         </div>
         <div>
             <Card className='widget-card'>
                 
                 <Card.Body>
                 <Card.Title className='widget-head'>AppsComp Widgets Pvt Ltd.,</Card.Title>
                 <Card.Text style={{marginBottom:'10px'}}>Have a question? Please send us a message and we will reach out to you</Card.Text>
                 <Card className='form-card'>
                     <MyForm/>
                    
                 
                 
               
    </Card>
                 </Card.Body>

             </Card>
         </div>
       

     </div>
    
     

     <footer>
         <Card className='container-footer'>
             <div className='d-flex flex-row'>
                 <Card className='card-footer bg-transparent'>
                     <Card.Body>
                         <img src={footer} height="400px" width="400px"></img>


                     </Card.Body>

                 </Card>
                 <Card className='card-footer bg-transparent'>
                     <Card.Body >
                     <Card.Title className='foot-head'>
                     Find Us
                     </Card.Title>
                     <Card.Text className='foot-para'>
                    <p> AppsComp Widgets Pvt Ltd.,<br/>
                     3rd Floor, Mayflower Valencia,<br/>
                     Avinashi Road, Nava India Stop,<br/>
                     Coimbatore - 641006<br/>
                     Tamilnadu, India,<br/>
                     </p>
                     </Card.Text></Card.Body>
                     <Card.Body>
                     <Card.Title className='foot-head'>Quick Links</Card.Title>
                     <Card.Text className='foot-para'>
                     About Us<br/>
                     Order Form<br/>
                     Products<br/>
                     </Card.Text>
                     </Card.Body>
                     
                 </Card>
                 <Card className='card-footer bg-transparent'>
                 <Card.Body >
                     <Card.Title className='foot-head'>
                     Business Query
                     </Card.Title>
                     <Card.Text className='foot-para'>
                    <p>   business@appscomp.com<br/>
                    +91 78457 40014<br/>
                    
                     </p>
                     </Card.Text></Card.Body>
                     <Card.Body>
                     <Card.Title className='foot-head'>
                     Tech Support
                     </Card.Title>
                     <Card.Text className='foot-para'>
                    <p>  support@appscomp.com<br/>
                    
                    
                     </p>
                     </Card.Text></Card.Body>
                     <Card.Body>
                     <Card.Title className='foot-head'>
                     Available Time

                     </Card.Title>
                     <Card.Text className='foot-para'>
                    <p> Mon-Fri : 10:00AM - 07:00PM<br/>
                    
                    
                     </p>
                     </Card.Text></Card.Body>
                   

                 </Card>
             </div>
             <div>
                 <Card className='foot-rights bg-transparent '>
                     <Card.Body>
                     <Card.Title className='rights'>© 2024 AppsComp Widgets Pvt Ltd. All Rights Reserved.
</Card.Title>
</Card.Body>

                 </Card>
             </div>

         </Card>
     </footer>
            </div>
         
         </>
     );
 }
