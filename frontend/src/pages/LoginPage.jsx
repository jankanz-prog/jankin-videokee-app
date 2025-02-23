import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { getBASEURL } from "../common/utility.js";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/userlog";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [responseMessage, setResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({"title": "", "message": "", "navigate": ""});

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
        const response = await fetch(`${getBASEURL()}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        setResponseMessage(`${data.message}`);
        if (data.status === "success") {
          dispatch(setUserId(data.userid));
          setModalInfo({"title": "Login", "message": "Access Granted!", "navigate": "/home"});
        }
        else if (data.status === "error") {
          setModalInfo({"title": "Login", "message": data.message, "navigate": ""});
          }
          setShow(true);
      } catch (error) {
        console.error("Error:", error);        
      }
    };

    postData();
  };

  return (
    <div className="login-container">
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo["title"]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalInfo["message"]}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setShow(false); navigate(modalInfo["navigate"]); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      ;
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
