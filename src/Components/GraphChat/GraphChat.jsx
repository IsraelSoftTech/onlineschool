import React from 'react';
import './GraphChat.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

// graph data
const data = [
  { month: '', enrolment: 30 },
  { month: '', enrolment: 20 },
  { month: '', enrolment: 40 },
  { month: '', enrolment: 50 },
];

const GraphChat = () => {
  return (
    <div className='graph-one container my-3 p-3'> {/* Added container for padding */}
      <h3 className="text-center">Scheduled Classes 20</h3>
      <span className="d-block text-center mb-2">March</span>
      
      <ResponsiveContainer width="100%" height={150}> {/* Adjust height as needed */}
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorEnrolment" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#B6D2FE" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#408AFD" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis hide />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="enrolment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorEnrolment)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <table className="table table-striped mt-3"> {/* Bootstrap table classes */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Introduction</td>
            <td>12/09/24</td>
            <td>12:30pm</td>
          </tr>
          <tr>
            <td>Introduction</td>
            <td>12/09/24</td>
            <td>12:30pm</td>
          </tr>
          <tr>
            <td>Introduction</td>
            <td>12/09/24</td>
            <td>12:30pm</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-link d-block text-center mt-2">See All</button> {/* Bootstrap link-styled button */}
    </div>
  );
};

export default GraphChat;
