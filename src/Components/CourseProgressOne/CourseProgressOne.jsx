import React from 'react';
import './CourseprogressOne.css';
import { FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaBook, FaGraduationCap } from 'react-icons/fa';
import { BiBookAdd, BiMessage } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';

const CourseProgressOne = () => {
    return (
        <div className="course-progress-container">
            <h2>Introduction to Algorithms</h2>
            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>
            <div className="info-cards">

                <div className="info-card">
                    <HiHome size={24} />
                    <div className="info-text">
                        <p>Assignments</p>
                        <h3>20</h3>
                    </div>
                </div>
                <div className="info-card">
                    <BiMessage size={24} />
                    <div className="info-text">
                        <p>Discussions</p>
                        <h3>30</h3>
                    </div>
                </div>
               
               
            </div>
            <p className="description" style={{color:'white'}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dui vel neque condimentum dignissim. Nulla facilisi. Sed id facilisis urna, at ultricies risus. Vestibulum vel velit ac neque lobortis sagittis. Nulla facilisi. Donec vel nulla eget arcu condimentum fermentum. Sed sed risus vel ipsum semper laoreet. Donec vel nulla eget arcu condimentum fermentum
            </p>
            <div className="icons">
                <span className="edit-icon">&#9998;</span>
                <span className="delete-icon">&#128465;</span>
            </div>
        </div>
    );
};

export default CourseProgressOne;
