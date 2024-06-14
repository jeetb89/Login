import React, { useState, useRef } from 'react';
import { Navigate } from "react-router-dom";

function Member() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: ''
  });
  const [formCompleted, setFormCompleted] = useState(false);
  const [error, setError] = useState('');
  const firstNameRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, dob, gender } = formData;

    if (!firstName || !lastName || !dob || !gender) {
      setError('Please fill all input fields.');
      firstNameRef.current.focus();
      return;
    }

    setFormCompleted(true);
  };

  if (formCompleted) {
    return <Navigate to="/registration/member/privacy" />;
  }

  return (
    <div className="member">
      <div className="member-title">Becoming a member is easy</div>
      <p className="member-subtitle">Tell us your name</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            ref={firstNameRef}
            className='input-field'
            type="text"
            name="firstName"
            placeholder="FIRST NAME"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className='input-field'
            type="text"
            name="lastName"
            placeholder="LAST NAME"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className='input-field'
            type="text"
            name="dob"
            placeholder="DOB"
            value={formData.dob}
            onChange={handleChange}
          />
          <input
            className='input-field'
            type="text"
            name="gender"
            placeholder="GENDER"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="continue-sbmt-btn" type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Member;
