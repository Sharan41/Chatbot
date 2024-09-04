import React from 'react'
import Table from 'react-bootstrap/Table';
import Appscomp from './Appscomp';
import { useState } from 'react';
import { MyForm } from './Appscomp';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


export default function DataTable  () {
    const [user, setUser] = useState([]); 
 
  useEffect(() => { 
    fetch('http://localhost:5001/hello', {  
        headers: {  
          Accept: "application/json"  
        }  
      })
    
      .then(response => response.json()) 
      .then(data => setUser(data)) 
      .catch(err => console.error("Error fetching data: ", err)); 
  }, []); 
 
  return ( 
      <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            
            <th>Email</th>
            <th>Phone </th>
            <th>Message</th>
           
          </tr>
        </thead>
        <tbody>
          {user.map((entry, index) => (
            <tr key={index}>
              <td>{entry.Fname}</td>
              <td>{entry.Lname}</td>
              
              <td>{entry.email}</td>
              <td>{entry.phone}</td>
              <td>{entry.message}</td>
            
            </tr>
          ))}
        </tbody>
      
      </Table>

   
    </>
  );
  }

  

