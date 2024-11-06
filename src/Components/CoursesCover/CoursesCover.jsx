// AssignmentComponent.jsx
import React from "react";
import "./CoursesCover.css";
import algo from "../../Assets/algo.jpg";
const CoursesCover = () => {
  return (
    <div className="assignment-container">
      <p className="assignment-text quote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro
        aspernatur distinctio, eius omnis sapiente repellendus architecto
        voluptate quasi laboriosam molestiae tenetur atque ipsa aut at esse
        suscipit sit et.
      </p>
      <div className="assignment-image-container">
        <img
          src={algo}
          alt="Algorithm illustration"
          className="assignment-image"
        />
       
      </div>
      <p className="assignment-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore,
        asperiores sequi quis, culpa quidem perferendis unde eos quam molestias
        totam laudantium ab, nemo qui rem alias? Itaque, maxime perspiciatis!
      </p>
      <button className="assignment-button">Take assignment</button>
    </div>
  );
};

export default CoursesCover;
