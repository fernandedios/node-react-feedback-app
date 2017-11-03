import React from 'react';

// props is passed along by redux-form Field component
// destructure to get input property
// label is a custom prop added to the Field component
export default ({ input, label }) => {
  // spread input property to our custom input component
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  )
};
