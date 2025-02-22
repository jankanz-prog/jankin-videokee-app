import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { getBASEURL } from "../common/utility.js";
import { useSelector, useDispatch } from "react-redux";
import { Router, useNavigate } from "react-router-dom";

let userId = null;

const reserveSong = (songcode) => {
  fetch(`${getBASEURL()}/song/reserve/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 0,
      code: songcode,
      userid: userId,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const HomePage = () => {
  const [contents, setContents] = useState([]);
  const [selection, setSelection] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  userId = useSelector((state) => state.userlog.userId);
  if (userId === null) {
    navigate("/login");
  }

  let content = null;

  let url =
    selection === 1 ? `${getBASEURL()}/songs` : `${getBASEURL()}/reservations`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setContents(selection === 1 ? data["songs"] : data["reservations"]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [selection]);

  if (selection === 1) {
    content = (
      <>
        <h4>Available Songs:</h4>
        <div className="table-container">
          <table width={"100%"} border={1}>
            <tbody>
              <tr>
                <th style={{ width: "10%" }}>Code</th>
                <th style={{ width: "50%" }}>Title</th>
                <th style={{ width: "20%" }}>Artist</th>
                <th style={{ width: "10%" }}>Language</th>
                <th style={{ width: "10%" }}>Action</th>
              </tr>
              {contents.map((data) => (
                <tr>
                  <td>{data.code}</td>
                  <td>{data.title}</td>
                  <td>{data.artist}</td>
                  <td>{data.lang}</td>
                  <td>
                    <button onClick={() => reserveSong(data.code)}>
                      Reserve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h4>Reservations:</h4>
        <div className="table-container">
          <table width={"100%"} border={1}>
            <tbody>
              <tr>
                <th style={{ width: "60%" }}>Title</th>
                <th style={{ width: "30%" }}>Reserved by</th>
                <th style={{ width: "10%" }}>Action</th>
              </tr>
              {contents.map((data) => (
                <tr>
                  <td>{data.songTitle}</td>
                  <td>{data.username}</td>

                  <td>
                    <button>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return (
    <div className="home-container">
      {/* Song Search Section */}
      <section className="home-search-section">
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
      </section>

      {/* Recent Songs Section */}
      <section className="home-recent-section">{content}</section>
      <div className="menu-selection">
        <button onClick={() => setSelection(1)}>Song Listing</button>
        <button onClick={() => setSelection(2)}>Reservations</button>
      </div>
    </div>
  );
};

export default HomePage;
