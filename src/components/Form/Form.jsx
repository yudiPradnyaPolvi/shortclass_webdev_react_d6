import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  const [completed, setCompleted] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const handleCompleted = (e) => {
    setCompleted(e.target.checked);
    if (e.target.checked) {
      setCompletedCount(completedCount + 1);
    } else {
      setCompletedCount(completedCount - 1);
    }
    
  };
  

  return (
    <div>
      
      {completed ? (
        <span style={{ textDecoration: 'line-through' }}>
          {props.title} - {props.description}
        </span>
      ) : (
        <div>
          {props.title} - {props.description}
        </div>
      )}
      <input
      
        type="checkbox"
        name="completed"
        id="completed"
        checked={completed}
        onChange={handleCompleted}
      />
      
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Form;