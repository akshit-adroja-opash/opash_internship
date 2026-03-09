import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from '../utils';

function SignUp() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError('Name, email, and password are required');
    }

    if (password.length < 4) {
      return handleError('Password must be at least 4 characters long');
    }

    try {
      const url = "http://localhost:5000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });

      const result = await response.json();

      if (!response.ok) {
        return handleError(result.message || "An error occurred during signup.");
      }

      handleSuccess("Signup Successful!");
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      handleError("An error occurred during signup.");
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <h1>SignUp</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleChange} type='text' name='name' value={signupInfo.name} autoFocus placeholder='Enter Your Name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input onChange={handleChange} type='email' name='email' value={signupInfo.email} placeholder='Enter Your Email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input onChange={handleChange} type='password' name='password' value={signupInfo.password} placeholder='Enter Your Password' />
        </div>
        <button type="submit">SignUp</button>
        <span>Already have an account ? <Link to="/login">Login</Link> </span>
      </form>
    </div>
  );
}

export default SignUp;
