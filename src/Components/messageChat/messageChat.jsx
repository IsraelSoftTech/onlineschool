import React from 'react';
import './messageChat.css';
import profile from '../../Assets/profile.png'
import { BiMessage } from 'react-icons/bi';
import { FaHand } from 'react-icons/fa6';
import { BsHandThumbsUpFill } from 'react-icons/bs';
const messageChat = () => {
  return (
    <div className="messageChat">
      <h2 className="messageChat__header">Discussions (12)</h2>
      <div className="messageChat__discussion">
        <img src={profile}
          alt="User" 
          className="messageChat__avatar" 
        />
        <div className="messageChat__content">
          <span className="messageChat__username">Marry Tilda</span>
          <p className="messageChat__text">
            Please did you understand what was explained I was lost after the image, and I really need help, so as to understand
          </p>
          <div className="messageChat__actions">
            <span className="messageChat__likes"><BsHandThumbsUpFill/>20 Likes</span>
            <span className="messageChat__comments"><BiMessage/>15 Comments</span>
          </div>
        </div>
      </div>
      <div className="messageChat__discussion">
        <img 
          src= {profile}
          alt="User" 
          className="messageChat__avatar" 
        />
        <div className="messageChat__content">
          <span className="messageChat__username">Marry Tilda</span>
          <p className="messageChat__text">
            Please did you understand what was explained I was lost after the image, and I really need help, so as to understand
          </p>
          <div className="messageChat__actions">
            <span className="messageChat__likes"><BsHandThumbsUpFill/>20 Likes</span>
            <span className="messageChat__comments"><BiMessage/>15 Comments</span>
          </div>
        </div>
      </div>
      <div className="messageChat__commentBox">
        <input 
          type="text" 
          placeholder="Add a comment" 
          className="messageChat__input" 
        />
        <button className="messageChat__button">Comment</button>
      </div>
    </div>
  );
};

export default messageChat;
