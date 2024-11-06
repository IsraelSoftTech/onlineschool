import React from 'react';
import './Meeting.css';

const Meeting = () => {
    const datum = [
        { type: 'Staff', description: 'Staff meeting with all of the new recruited teachers...', date: '07-02-20', time: '12 PM' },
        { type: 'Staff', description: 'Staff meeting with all of the new recruited teachers...', date: '07-02-20', time: '12 PM' }
    ];

    return (
        <div className="container mt-3">
            {/* Meetings */}
            <div className="meetings-container mx-auto">
                <div className="meetings-header d-flex justify-content-between align-items-center">
                    <h2>Meetings</h2>

                    <table className="table table-borderless text-center">
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Week</th>
                                <th>Month</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className="meetings-table">
                    <div className="table-header row">
                        <span className="col-3 col-md-2 header-item">Type</span>
                        <span className="col-6 col-md-6 header-item">Description</span>
                        <span className="col-2 col-md-2 header-item">Date</span>
                        <span className="col-1 col-md-2 header-item">Time</span>
                    </div>

                    {datum.map((item, index) => (
                        <div className="table-row row" key={index}>
                            <span className="col-3 col-md-2 row-item">{item.type}</span>
                            <span className="col-6 col-md-6 row-item description">{item.description}</span>
                            <span className="col-2 col-md-2 row-item">{item.date}</span>
                            <span className="col-1 col-md-2 row-item">{item.time}</span>
                        </div>
                    ))}

                    <div className="see-all text-end mt-3">
                        <h6 className="text-primary">See All</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meeting;
