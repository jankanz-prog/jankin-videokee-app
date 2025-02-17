import React from 'react';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Song Search Section */}
      <section className="home-search-section">
        <div className="container">
          <div className="home-search-box">
            <input
              type="text"
              placeholder="Search for songs, artists, or genres..."
              className="home-search-input"
            />
            <button className="home-search-button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Recent Songs Section */}
      <section className="home-recent-section">
        <div className="container">
          <h2>Recently Played</h2>
          <div className="home-songs-grid">
            {/* Sample song items - replace with actual data */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="home-song-card">
                <div className="home-song-thumbnail">
                  <img src="src/assets/images/song-placeholder.jpg" alt="Song thumbnail" />
                  <button className="home-play-button">
                    <i className="bi bi-play-fill"></i>
                  </button>
                </div>
                <div className="home-song-info">
                  <h3>Sample Song Title</h3>
                  <p>Artist Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Songs Section */}
      <section className="home-popular-section">
        <div className="container">
          <h2>Popular Songs</h2>
          <div className="home-songs-grid">
            {/* Sample song items - replace with actual data */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="home-song-card">
                <div className="home-song-thumbnail">
                  <img src="src/assets/images/song-placeholder.jpg" alt="Song thumbnail" />
                  <button className="home-play-button">
                    <i className="bi bi-play-fill"></i>
                  </button>
                </div>
                <div className="home-song-info">
                  <h3>Popular Song Title</h3>
                  <p>Artist Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="home-genres-section">
        <div className="container">
          <h2>Browse by Genre</h2>
          <div className="home-genres-grid">
            {['Pop', 'Rock', 'R&B', 'Country', 'Jazz', 'Classical'].map((genre) => (
              <div key={genre} className="home-genre-card">
                <h3>{genre}</h3>
                <i className="bi bi-music-note-beamed"></i>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
