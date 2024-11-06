import React, { useState } from 'react';
import './NavComponent.css';
import logo from '../../Assets/log.png';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { BiBook, BiBookAdd } from 'react-icons/bi';
import Topbar from '../Topbar/Topbar';

const NavComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className={menuOpen ? 'menu-open' : ''}>
      {/* Menu Toggle Button for small screens */}
      <button className="menu-toggle btn btn-danger d-md-none" onClick={toggleMenu}>
        ☰
      </button>

      {/* Overlay for small screens */}
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Sidebar Menu */}
      <div className={`dash-left ${menuOpen ? 'active' : ''} d-flex flex-column align-items-center`}>
        <div className="nav-bar">
          <img src={logo} alt="logo" className="logo mb-3" />
          <hr className="w-100" />
          <div className="side-menus">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className={`sider d-flex align-items-center ${isActive('/')}`}>
                  <MdDashboard className="sider-icon me-2" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/students" className={`sider d-flex align-items-center ${isActive('/students')}`}>
                  <FaGraduationCap className="sider-icon me-2" /> Students
                </Link>
              </li>
              <li>
                <Link to="/teachers" className={`sider d-flex align-items-center ${isActive('/teachers')}`}>
                  <GiTeacher className="sider-icon me-2" /> Teachers
                </Link>
              </li>
              <li>
                <Link to="/courses" className={`sider d-flex align-items-center ${isActive('/courses')}`}>
                  <BiBook className="sider-icon me-2" /> Courses
                </Link>
              </li>
              <li>
                <Link to="/class" className={`sider d-flex align-items-center ${isActive('/class')}`}>
                  <GiTeacher className="sider-icon me-2" /> Class
                </Link>
              </li>
              <li>
                <Link to="/assignments" className={`sider d-flex align-items-center ${isActive('/assignments')}`}>
                  <BiBookAdd className="sider-icon me-2" /> Assignments
                </Link>
              </li>
              <li>
                <Link to="/attendance" className={`sider d-flex align-items-center ${isActive('/attendance')}`}>
                  <GiTeacher className="sider-icon me-2" /> Attendance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Topbar Component */}
      <Topbar isMenuOpen={menuOpen} />
    </div>
  );
};

export default NavComponent;
