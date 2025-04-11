import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignInPage.css'; // Import the CSS for styles

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log(`Signed in with email: ${email}`);
    navigate('/role'); // Navigate to the SignInRolePage
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in-form" onSubmit={handleSignIn}>
        <header>
          <img
            src={require('./logo1.png')} // Use require to import the logo
            alt="Logo"
            className="logo"
          />
          <h5>Make it easier for teams to manage projects and tasks</h5>
        </header>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <button type="submit" className="sign-in-button">Sign In</button>
        <p>or</p>
        <div className="social-buttons">
          <button className="social-button">Sign in with Apple</button>
          <button className="social-button">Sign in with Google</button>
          <button className="social-button">Sign in with Microsoft</button>
        </div>
        <p>Log in?</p>
      </form>
    </div>
  );
};

export default SignInPage;