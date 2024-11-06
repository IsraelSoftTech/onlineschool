import React from 'react';
import './CourseTeacherAdd.css';
import { BsTrash } from 'react-icons/bs';

const CourseTeacherAdd = ({ onClose }) => {
  return (
    <div className="course-teacher-add-overlay">
      <div className="course-teacher-add-modal">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          <div className="tab-header">
            <button className="tab">Admins | 5</button>
            <button className="tab">Teachers | 15</button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search attendee" />
          </div>
          <table className="teacher-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Qualification</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Mark Doe</td>
                <td>Master degree</td>
                <td>English</td>
              </tr>
              <tr>
                <td>John Mark Doe</td>
                <td>Degree</td>
                <td>Maths</td>
              </tr>
            </tbody>
          </table>
          <div className="selected-tutors">
            <label>Selected tutor(s)</label>
            <div className="selected-tutor">
              Mary Joanah
              <button className="remove-btn"><BsTrash/></button>
            </div>
          </div>
          <button className="add-teacher-btn">Add teacher</button>
        </div>
      </div>
    </div>
  );
};

export default CourseTeacherAdd;
