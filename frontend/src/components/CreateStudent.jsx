import React from 'react'
import { useState } from 'react';

import axios from 'axios';

const CreateStudent = () => {

  
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    rollno: '',
  });

  const [message, setMessage] = useState(null);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setUserForm(prevState => ({
      ...prevState, 
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/students/add',
        userForm,
        {
          headers: {
            'Content-Type': 'application/json',
            //'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer your_token_here'

          },
          withCredentials: false
        }
      );
      setMessage('Student added successfully!');
      console.log(response.data);
    } catch (error) {
      setMessage('Error adding student.');
      console.error(error.response);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      <div className="form-wrapper">
        {message && <p>{message}</p>}
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="rollno">Roll no.</label>
            <input
              type="text"
              className="form-control"
              name="rollno"
              id="rollno"
              value={userForm.rollno}
              onChange={inputsHandler}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
