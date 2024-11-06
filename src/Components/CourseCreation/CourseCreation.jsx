import React, { useState } from 'react';
import './CourseCreation.css';
import { FaPlusCircle } from 'react-icons/fa';


const CourseCreation = () => {
  const [isVisible, setIsVisible] = useState(true);


  const handleClose = () => {
    setIsVisible(false); // Hide the modal
  };




  if (!isVisible) return null; // Don't render anything if the modal is closed

  return (
    <>
      <div className="course-create-container">
        <div className="course-create-card">
          <div className="course-create-header">
            <h2>Create course</h2>
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input type="text" id="title" placeholder="Enter course title" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea id="description" placeholder="Enter course description" required></textarea>
            </div>
            <div className="form-group teacher-group">
              <label>Teacher</label>
              
            </div>
            <button type="submit" className="create-event-btn">Create event</button>
          </form>
        </div>
      </div>

    
    </>
  );
};

export default CourseCreation;

