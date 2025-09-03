import React, { useState } from "react";
import API from "../utils/axios"; // axios instance for backend calls
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email.endsWith("@gmail.com")) {
      setError("Email must be a valid Gmail address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const res = await API.post("/auth/login", { email, password });
      setSuccess(res.data.message || "Login successful!");

      // Save token to localStorage for authentication
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            minLength={6}
          />

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
