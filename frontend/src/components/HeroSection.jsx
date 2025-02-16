import React from 'react';

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.querySelector('.feature-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-6 hero-content">
            <h1 className="display-3 fw-bold mb-4 animate-in">Jankin Videoke</h1>
            <p className="lead mb-4 animate-in-delay-1">Your ultimate karaoke companion for endless entertainment. Sing your heart out with crystal-clear audio and a vast song collection!</p>
            <div className="hero-buttons animate-in-delay-2">
              <button className="btn btn-primary btn-lg me-3" onClick={() => window.location.href = '/signup'}>
                Get Started Free
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <button className="btn btn-outline-light btn-lg" onClick={scrollToFeatures}>
                Learn More
                <i className="bi bi-chevron-down ms-2"></i>
              </button>
            </div>
            <div className="mt-4 text-light animate-in-delay-3">
              <small>
                <i className="bi bi-check-circle-fill me-2"></i>
                No credit card required
              </small>
              <small className="ms-4">
                <i className="bi bi-stars me-2"></i>
                14-day free trial
              </small>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img 
              src="src/assets/images/jankinvideo_logo.png" 
              alt="Jankin Videoke App" 
              className="img-fluid hero-image animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
