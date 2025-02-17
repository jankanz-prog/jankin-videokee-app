import React, { useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import "../styles/login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        setResponseMessage(`${data.message}`);
        if (data.status === "success") {
          navigate("/home");
        }
      } catch (error) {
        setResponseMessage(`${error}`);
      }
    };

    postData();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img
            src="src/assets/images/jankinvideo_logo.png"
            alt="Jankin Videoke"
            className="login-logo"
          />
          <h1>Welcome Back!</h1>
          <p>Sign in to continue to Jankin Videoke</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="login-options">
            <label className="login-remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" className="login-forgot">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <div className="text-center">{responseMessage}</div>

        <div className="login-footer">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
