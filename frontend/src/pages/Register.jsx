import React, { useState } from "react";
import API from "../utils/axios"; // axios instance
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
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
      const res = await API.post("/auth/register", { username, email, password });
      setSuccess(res.data.message || "Registered successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={3}
            autoComplete="username"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
          />

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="register-footer">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
