import React from 'react';
import './Application.css';
import { FaTrashAlt } from 'react-icons/fa';  // Trash icon
import { FaEye } from 'react-icons/fa';        // Eye icon
import { FaCalendarAlt } from 'react-icons/fa'; // Calendar icon

// applications
const applications = [
  {
    name: 'John Doe Maxwell',
    role: 'Tutor',
  },
  {
    name: 'Jane Smith',
    role: 'Tutor',
  },
];

const Application = () => {
  return (
    <>
      {/* applications */}
      <div className="applications-container container my-4">
        <h2 className="text-center mb-4">Applications</h2>
        <table className="applications-table table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.name}</td>
                <td>{app.role}</td>
                <td className="actions">
                  <button className="btn btn-danger btn-sm" aria-label="Delete">
                    <FaTrashAlt />
                  </button>
                  <button className="btn btn-info btn-sm" aria-label="View">
                    <FaEye />
                  </button>
                  <button className="btn btn-primary btn-sm" aria-label="Schedule">
                    <FaCalendarAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#" className="see-all d-block text-center text-primary mt-3">See all</a>
      </div>
    </>
  );
}

export default Application;
