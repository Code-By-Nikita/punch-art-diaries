import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons from react-icons
import './style/LoginStyle.css'; // Ensure you import the styles

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation (simplified for now)
    console.log(formData);
    alert('Logged in successfully!');
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <FaEnvelope className="icon" /> {/* React Icon for email */}
              <input
                type="email"
                id="email1"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <FaLock className="icon" /> {/* React Icon for password */}
              <input
                type="password"
                id="password1"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign Up here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
