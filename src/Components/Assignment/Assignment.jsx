import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';
import { FaPlus, FaEdit } from 'react-icons/fa'; // Import icons for + and edit
import './Assignment.css';

const Assignment = () => {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (value) => {
    setAnswer(value);
  };

  return (
    <div className="assignment">
      <div className="assignment__header">
        <h2>Assignment</h2>
        <button className="assignment__add-question">
          <FaPlus /> Add question
        </button>
      </div>

      <div className="assignment__question">
        <p>Which of the following sorting algorithms has the best worst-case time complexity?</p>
        <div className="assignment__options">
          <button className="assignment__option">Quick sort</button>
          <button className="assignment__option">Selection sort</button>
          <button className="assignment__option">Insertion sort</button>
          <button className="assignment__option">Merge sort</button>
        </div>
        <button className="assignment__edit-button">
          <FaEdit /> Edit
        </button>
      </div>

      <div className="assignment__question">
        <p>Explain the difference between a greedy algorithm and a dynamic programming algorithm in the context of solving optimization problems. Give an example where a greedy algorithm would produce an optimal solution and another example where dynamic programming would be more suitable.</p>
        <ReactQuill
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Enter your answer"
          modules={{
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],
              ['link', 'image', 'code-block', 'video'],
              ['clean'] // Clear formatting button
            ],
          }}
          formats={[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent', 'align',
            'link', 'image', 'video', 'code-block', 'color', 'background'
          ]}
          className="assignment__editor"
        />
        <button className="assignment__edit-button">
          <FaEdit /> Edit
        </button>
      </div>

      <div className="assignment__question">
        <p>Which of the following sorting algorithms has the best worst-case time complexity?</p>
        <div className="assignment__options">
          <button className="assignment__option">Quick sort</button>
          <button className="assignment__option">Selection sort</button>
          <button className="assignment__option">Insertion sort</button>
          <button className="assignment__option">Merge sort</button>
        </div>
        <button className="assignment__edit-button">
          <FaEdit /> Edit
        </button>
      </div>
    </div>
  );
};

export default Assignment;
