import React from "react";
import SongListing from "./SongListing";
import { useNavigate } from "react-router-dom";


const MainSelection = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Main Selection Page</h2>
        <button onClick={() => navigate('/songlisting')}>Go to Song List</button>
        <button onClick={() => navigate('/songPlayer')}>Go to Player</button>
    </div>
  )
};

export default MainSelection;