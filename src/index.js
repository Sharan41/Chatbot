import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appscomp from './Appscomp';
import Header from './header';
import { Outlet, Link, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import DataTable from './Table';
import { MyForm } from './Appscomp';
import { useState } from 'react';

export default function Main(){
  
  
 
return(<>

  <BrowserRouter>
           
  <Routes>
  <Route path="/" element={<Header/>}>
  <Route path="/App" element={<App />} />
 <Route path="/Appscomp" element={<Appscomp />} /> 
 
 
  <Route path="/Table" element={<DataTable  />} />



</Route>
  </Routes>
  </BrowserRouter>
  </>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
