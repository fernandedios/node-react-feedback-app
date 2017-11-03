import React from 'react';

// props is passed along by redux-form Field component
// destructure to get input, meta property
// meta contains an error and touched property, to be used for validation
// -- touched && error // do not show if either one is false; js abuse! lol
// label is a custom prop added to the Field component
export default ({ input, label, meta: { error, touched } }) => {
  // spread input property to our custom input component
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
