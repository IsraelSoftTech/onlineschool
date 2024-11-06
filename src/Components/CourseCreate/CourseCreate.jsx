import React, { useState } from 'react';
import './CourseCreate.css';
import { FaPlusCircle } from 'react-icons/fa';
import CourseTeacherAdd from '../CourseTeacherAdd/CourseTeacherAdd';

const CourseCreate = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTeacherAdd, setShowTeacherAdd] = useState(false);

  const handleClose = () => {
    setIsVisible(false); // Hide the modal
  };

  const openTeacherAdd = () => {
    setShowTeacherAdd(true);
  };

  const closeTeacherAdd = () => {
    setShowTeacherAdd(false);
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
              <button type="button" className="add-teacher-btn" onClick={openTeacherAdd}>
                <FaPlusCircle size={20} />
              </button>
            </div>
            <button type="submit" className="create-event-btn">Create event</button>
          </form>
        </div>
      </div>

      {/* Render CourseTeacherAdd if showTeacherAdd is true */}
      {showTeacherAdd && <CourseTeacherAdd onClose={closeTeacherAdd} />}
    </>
  );
};

export default CourseCreate;

