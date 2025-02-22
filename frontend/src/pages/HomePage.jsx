import React, { useState, useEffect } from "react";
import "../styles/home.css";

const HomePage = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/songs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSongs(data["songs"]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      {/* Song Search Section */}
      <section className="home-search-section">
        <div className="container">
        <div className="container">
          <div className="home-search-box">
            <input
              type="text"
              placeholder="Search for songs, or artists"
              className="home-search-input"
            />
            <button className="home-search-button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* Recent Songs Section */}
      <section className="home-recent-section">
        <h2>Available Songs:</h2>
        <div className="table-container">
          <table width={"100%"} border={1}>
            <tr >
              <th style={{ width: "10%" }}>Code</th>
              <th style={{ width: "50%" }}>Title</th>
              <th style={{ width: "20%" }}>Artist</th>
              <th style={{ width: "10%" }}>Language</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
            {songs.map((song) => (
              <tr>
                <td>{song.code}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.lang}</td>
                <td>
                  <button>Reserve</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
