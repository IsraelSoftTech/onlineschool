// Calenda.jsx
import React, { useState } from 'react'
import './Calenda.css'
import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calenda = () => {
    // Calendar state
    const [value, setValue] = useState(new Date());
  
    return (
        <div className="container bg-light py-3 rounded"> {/* Bootstrap classes for layout */}
            <div className="calendar-container mx-auto d-flex flex-column align-items-center">
                <Calendar
                    onChange={setValue}
                    value={value}
                />
            </div>
        </div>
    )
}

export default Calenda;
