import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from '../utils';

function Login() {
  const [LoginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = LoginInfo;

    if (!email || !password) {
      return handleError('Email and password are required');
    }
    if (password.length < 4) {
      return handleError('Password must be at least 4 characters long');
    }

    try {
      const url = "http://localhost:5000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(LoginInfo)
      });

      const result = await response.json();

      if (!response.ok) {
        return handleError(result.message || "An error occurred during login.");
      }

      if (result.jwtToken) {
        localStorage.setItem('userToken', result.jwtToken);
        localStorage.setItem('loggedInUser', result.name);
        handleSuccess("Login Successful!");

        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        handleError("Login successful but no token received.");
      }

    } catch (err) {
      handleError("An error occurred during login.");
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            value={LoginInfo.email}
            placeholder='Enter Your Email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            value={LoginInfo.password}
            placeholder='Enter Your Password'
          />
        </div>
        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
