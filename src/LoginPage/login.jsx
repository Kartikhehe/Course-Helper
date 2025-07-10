import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://course-helper-updated-backend.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        window.location.href = "/";
      } else {
        alert(data.message || "Error logging in.");
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
            src="../logo2.png" // Replace with your logo path
            alt="Logo"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />
        </div>
        <h2 style={{ textAlign: "center", fontWeight: 600, marginBottom: "1.5rem" }}>
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="you@example.com"
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
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && (
            <div className="error-message" style={{ textAlign: "center", color: "red" }}>
              {errorMessage}
            </div>
          )}
          <button type="submit" className="login-button">
            Login
          </button>
          <p style={{ fontSize: "14px", textAlign: "center", marginTop: "12px" }}>
            Don’t have an account?{" "}
            <a href="/register" className="forgot-password">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
