import React from 'react';
import './Chats.css';
import profile from '../../Assets/profile.png';

const Chats = () => {
  // Chats data
  const chats = [
    {
      image: profile,
      name: 'John Doe',
      message: 'Please did you understand what was explained ...',
    },
    {
      image: profile,
      name: 'Jane Smith',
      message: 'I had a question about the last meeting...',
    },
  ];

  return (
    <div className="chat-list container">
      <h2 className="text-center">Chats</h2>
      <div className="chat-items">
        {chats.map((chat, index) => (
          <div className="chat-item row" key={index}>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <img src={chat.image} alt="" className="chat-img" />
            </div>
            <div className="col-10">
              <strong>{chat.name}</strong>
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="see-all">See all</a>
    </div>
  );
};

export default Chats;
