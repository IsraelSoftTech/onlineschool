import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Calenda from './Components/Calenda/Calenda'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Chats from './Components/Chats/Chats'
import Meeting from './Components/Meeting/Meeting'
import Courses from './Components/Courses/Courses';
import AdminDashOne from './Components/AdminDashOne/AdminDashOne'
import AdminDashTwo from './Components/AdminDashTwo/AdminDashTwo'
import AdminDashThree from './Components/AdminDashThree/AdmindashThree'
import CoursesOne from './Components/CoursesOne/CoursesOne';
import CoursesTwo from './Components/CoursesTwo/CoursesTwo';
import CoursesThree from './Components/CoursesThree/CoursesThree';
import CoursesFour from './Components/CoursesFour/CoursesFour';
import CoursesFive from './Components/CoursesFive/CoursesFive';
import CoursesSix from './Components/CoursesSix/CoursesSix';
import CoursesSeven from './Components/CoursesSeven/CoursesSeven';

function App() {


  return (

 <div className='app'>


  {/* <Chats/> */}
{/* <Calenda/> */}
{/* <GraphChat/> */}
<Router>
<Routes>

<Route path="/" element={<AdminDashboard />} />
<Route path ="/AdminDashBoard" element={<Navigate to="/AdminDashBoard/1" />} />
<Route path="/AdminDashBoard/1" element={<AdminDashboard/>} />
<Route path="/AdminDashOne/2" element={<AdminDashOne/>} />
<Route path="/AdminDashTwo/3" element={<AdminDashTwo/>} />
<Route path="/AdminDashThree/4" element={<AdminDashThree/>} />

<Route path="/courses" element={<Courses />} />
<Route path="/courses" element={<Navigate to="/courses/1" />} /> {/* Redirect to /courses/1 by default */}
        <Route path="/courses/1" element={<Courses />} />
        <Route path="/coursesOne/2" element={<CoursesOne />} />
        <Route path="/coursesTwo/3" element={<CoursesTwo />} />
        <Route path="/coursesThree/4" element={<CoursesThree />} />
        <Route path="/coursesFour/5" element={<CoursesFour />} />
        <Route path="/coursesFive/6" element={<CoursesFive />} />
        <Route path="/coursesSix/7" element={<CoursesSix />} />
        <Route path="/coursesSeven/8" element={<CoursesSeven />} />
     
      


</Routes>

</Router>


  </div>
  );
}

export default App;

