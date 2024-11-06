import React from 'react'
import './CoursesSix.css'
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
import CourseCard from '../CourseCard/CourseCard';

import CourseProgress from '../CourseProgress/CourseProgress'
import CoursesCover from '../CoursesCover/CoursesCover';
import MessageChat from '../messageChat/messageChat'


const CoursesSix = () => {
    const location = useLocation(); // Get the current path

    const buttons = [
      { number: 1, path: '/courses/1' },
      { number: 2, path: '/coursesOne/2' },
      { number: 3, path: '/coursesTwo/3' },
      { number: 4, path: '/coursesThree/4' },
      { number: 5, path: '/coursesFour/5' },
      { number: 6, path: '/coursesFive/6' },
      { number: 7, path: '/coursesSix/7' },
      { number: 8, path: '/coursesSeven/8' },
      // Add more buttons as needed
    ];
  
  return (
    <div>
<NavComponent/>



{/* Cards Container */}
<div className='cards'>

<div className="course-left-side">

<CourseProgress/>

   

<div className="coursecard">
<CoursesCover/>
<MessageChat/>
</div>

</div>
{/* _--------------------------------------------------------------left-side */}

<div children="course-right-side">
        
       
    <Calenda/>
    <Chats/>
  
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

export default CoursesSix