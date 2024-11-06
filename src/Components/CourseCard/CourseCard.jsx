import React from 'react';
import './CourseCard.css'; // Create a CSS file for styles

const coursesData = [
  { title: 'Introduction to Algorithms', students: 20, teachers: 2, completion: 'green' },
  { title: 'Database Design', students: 20, teachers: 3, completion: 'yellow' },
  { title: 'Network Administration', students: 20, teachers: 1, completion: 'red' },
];

const CourseCard = () => {
  return (
    <div className="course-card-container">
      <div className="course-card-header">
        <h3>Courses</h3>
        <button className="add-course">+</button>
      </div>
      <table className="course-card-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Total students</th>
            <th>Teachers</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          {coursesData.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.students}</td>
              <td>{course.teachers}</td>
              <td>
                <div className={`completion-bar ${course.completion}`}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#" className="see-all">See all</a>
    </div>
  );
};

export default CourseCard;
