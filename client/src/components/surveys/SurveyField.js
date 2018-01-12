import React from 'react';

// props is passed along by redux-form Field component
// destructure to get input, meta property
// meta contains an error and touched property, to be used for validation
// -- touched && error // do not show if either one is false; js abuse! lol
// label is a custom prop added to the Field component
export default ({ input, label, meta: { error, touched } }) => {
  // spread input property to our custom input component
  return (
    <div className="form-group">
      <input {...input} placeholder={label} className="form-control" />
      <div class="help-block with-errors">
        {touched && error}
      </div>
    </div>
  );
};
