import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
  });

  const History = useNavigation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    History.push('/display', { formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} required />

      <label>Phone:</label>
      <input type="tel" name="phone" onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} required />

      <label>Location:</label>
      <input type="text" name="location" onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;