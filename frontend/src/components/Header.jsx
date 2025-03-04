import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="landing-page-site-header">
      <nav className="landing-page-navbar navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img 
              src="src/assets/images/jankinvideo_logo.png" 
              alt="Jankin Videoke" 
              className="landing-page-header-logo"
            />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="landing-page-nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="landing-page-nav-link" href="/features">Features</a>
              </li>
              <li className="nav-item">
                <a className="landing-page-nav-link" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="landing-page-nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="landing-page-nav-link btn btn-primary text-white" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
