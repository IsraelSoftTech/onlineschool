// InactiveCourse.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './inactiveCourse.css'
const inactiveCourse = ({ onClose }) => {
  return (
    <div className="inactive-course-overlay">
      <div className="inactive-course-container">
        <div className="inactive-course-header">
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="inactive-course-body">
          <p>
            This course will be inactivated, students and teachers won’t be able to see or work on the course
          </p>
          <button className="inactive-course-button">Inactivate course</button>
        </div>
      </div>
    </div>
  );
};

export default inactiveCourse;
