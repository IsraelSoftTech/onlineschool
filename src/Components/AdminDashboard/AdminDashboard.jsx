import React from 'react'
import './AdminDashboard.css'
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
import NavComponent from '../NavComponent/NavComponent';
import { FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { BiBook, BiBookAdd } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';
import { PiChalkboardTeacherLight } from 'react-icons/pi';
import GraphChat from '../GraphChat/GraphChat';
import Calenda from '../Calenda/Calenda';
import Chats from '../Chats/Chats';
import Meeting from '../Meeting/Meeting';
import Application from '../Application/Application';





const AdminDashboard = () => {
  const location = useLocation(); // Get the current path

  const buttons = [
    { number: 1, path: '/AdminDashBoard/1' },
    { number: 2, path: '/AdminDashOne/2' },
    { number: 3, path: '/AdminDashTwo/3' },
    { number: 4, path: '/AdminDashThree/4' },
    { number: 5, path: '/AdminDashboardFour/5' },
    // Add more buttons as needed
  ];
  return (
    <div>
<NavComponent/>



{/* Cards Container */}
<div className='cards mt-6'>
<div className="container mt-4">
  <div className="row g-3">
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card p-3 shadow-sm d-flex align-items-center">
        <FaGraduationCap className="icon mb-2" />
        <div className="text text-center">
          <h3>Students</h3>
          <h4>10</h4>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <div className="card p-3 shadow-sm d-flex align-items-center">
        <FaChalkboardTeacher className="icon mb-2" />
        <div className="text text-center">
          <h3>Teachers</h3>
          <h4>10</h4>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <div className="card p-3 shadow-sm d-flex align-items-center">
        <BiBookAdd className="icon mb-2" />
        <div className="text text-center">
          <h3>Courses</h3>
          <h4>10</h4>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <div className="card p-3 shadow-sm d-flex align-items-center">
        <BiBook className="icon mb-2" />
        <div className="text text-center">
          <h3>Assignments</h3>
          <h4>10</h4>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <div className="card p-3 shadow-sm d-flex align-items-center">
        <GiTeacher className="icon mb-2" />
        <div className="text text-center">
          <h3>Classes</h3>
          <h4>10</h4>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <div className="card p-3 shadow-sm d-flex align-items-center">
        <PiChalkboardTeacherLight className="icon mb-2" />
        <div className="text text-center">
          <h3>Scheduled Classes</h3>
          <h4>10</h4>
        </div>
      </div>
    </div>
  </div>


         {/* Graphs and Calendar components */}
         <div className="graph-calendar">
        <GraphChat/>
        <GraphChat/>
    <Calenda/>
 
  
        </div>
        <div className="meeting-apps">
                <Meeting/>
                <Chats/>
                <Application/>
                
                </div>

             

      </div>

       {/* page nav */}
       <div style={{display:'flex',gap:'0.5rem',textAlign:'right',textDecoration:'none',position:'absolute',right:'0',bottom:'0'}}>
        {buttons.map(({ number, path }) => (
             
          <Link key={number} to={path}>
        
            <button className='pg-nav'
              style={{
                flex: 1,
                backgroundColor: location.pathname === path ? 'blue' : '#fd5203',
                color: 'white'
              }}
            >
              {number}
            </button>
           
          </Link>
          
        ))}
    </div>
      </div>

        </div>
  )
}

export default AdminDashboard