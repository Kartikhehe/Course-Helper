import React, { useState } from "react";
import "./RegisterPage.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("https://course-helper-updated-backend.vercel.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        alert("Redirecting to Login Page!");
        window.location.href = "/login";
      } else {
        alert(data.message || "Error registering user.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#f1f1f1",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')",
      }}
    >
      <div
        className="login-container"
        style={{
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          backgroundColor: "#ffffff",
          padding: "2rem",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <div className="login-logo" style={{ marginBottom: "1rem" }}>
          <img
            src="../logo2.png"
            alt="Logo"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />
        </div>
        <h2 style={{ textAlign: "center", fontWeight: 600, marginBottom: "1.5rem" }}>
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
          <p style={{ fontSize: "14px", textAlign: "center", marginTop: "12px" }}>
            Already signed up?{" "}
            <a href="/login" className="forgot-password">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
