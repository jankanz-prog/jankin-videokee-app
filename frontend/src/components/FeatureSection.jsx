import React from 'react';

const FeatureSection = () => {
  return (
    <section className="feature-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Jankin Videoke?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <i className="bi bi-music-note-beamed feature-icon"></i>
              <h3>Vast Song Library</h3>
              <p>Access thousands of songs from various genres and languages</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <i className="bi bi-mic feature-icon"></i>
              <h3>High-Quality Audio</h3>
              <p>Crystal clear sound with professional-grade audio processing</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <i className="bi bi-star feature-icon"></i>
              <h3>Score System</h3>
              <p>Get real-time feedback and improve your singing skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
