import React from 'react';

const DisplayComponent = ({ location }) => {
  const formData = location.state.formData;

  return (
    <div>
      <h2>Entered User Details:</h2>
      <p>Name: {formData.name}</p>
      <p>Phone: {formData.phone}</p>
      <p>Email: {formData.email}</p>
      <p>Location: {formData.location}</p>
    </div>
  );
};

export default DisplayComponent;