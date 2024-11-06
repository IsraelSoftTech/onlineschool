import React from 'react';
import './Courseprogress.css';
import { FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaBook, FaGraduationCap } from 'react-icons/fa';
import { BiBookAdd } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';

const CourseProgress = () => {
    return (
        <div className="course-progress-container">
            <h2>Introduction to Algorithms</h2>
            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>
            <div className="info-cards">
                <div className="info-card">
                    <FaGraduationCap size={24} />
                    <div className="info-text">
                        <p>Students</p>
                        <h3>20</h3>
                    </div>
                </div>
                <div className="info-card">
                    <GiTeacher size={24} />
                    <div className="info-text">
                        <p>Classes</p>
                        <h3>30</h3>
                    </div>
                </div>
                <div className="info-card">
                    <BiBookAdd size={24} />
                    <div className="info-text">
                        <p>Assignments</p>
                        <h3>25</h3>
                    </div>
                </div>
                <div className="info-card">
                    <FaChalkboardTeacher size={24} />
                    <div className="info-text">
                        <p>Teacher(s)</p>
                        <h3>2</h3>
                    </div>
                </div>
            </div>
            <p className="description">
                In this course alone, you are going to be learning a lot of things about algorithms, which are the building blocks of all applications that you are going to be building. Understanding them alone will make you a better programmer, and you can only get better at it when you practice more and make it a challenge to understand it better.
            </p>
            <div className="icons">
                <span className="edit-icon">&#9998;</span>
                <span className="delete-icon">&#128465;</span>
            </div>
        </div>
    );
};

export default CourseProgress;
