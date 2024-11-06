// CreateCourseForm.jsx
import React, { useState } from 'react';
import './CreateEditCourse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const CreateEditCourse = ({ onClose }) => {
  const [teachers, setTeachers] = useState(["Mary Joanah"]);

  const addTeacher = () => {
    setTeachers([...teachers, "Mary Joanah"]);
  };

  const removeTeacher = (index) => {
    setTeachers(teachers.filter((_, i) => i !== index));
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2>Create course</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="form-body">
          <label>Title *</label>
          <input type="text" placeholder="Introduction to algorithms" />

          <label>Description *</label>
          <textarea placeholder="Enter course description"></textarea>

          <label>Teacher</label>
          <div className="teacher-list">
            {teachers.map((teacher, index) => (
              <div key={index} className="teacher-item">
                <span>{teacher}</span>
                <button onClick={() => removeTeacher(index)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            ))}
            <button className="add-teacher" onClick={addTeacher}>
              <FontAwesomeIcon icon={faPlus} /> Add Teacher
            </button>
          </div>
        </div>
        <button className="submit-button">Edit course</button>
      </div>
    </div>
  );
};

export default CreateEditCourse;
