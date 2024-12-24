import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="https://nwm.iitk.ac.in/skins/elastic/images/logo.svg?s=1702135220" alt="Logo" />
      </div>
      <div className="login-input">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />
      </div>
      <div className="login-input">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <button className="login-button">Login</button>
      <a href="/forgot-password" className="forgot-password">
        Forgot Password?
      </a>
    </div>
  );
}
