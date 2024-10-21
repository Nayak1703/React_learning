import React, { useState, useEffect, useRef } from "react";
import VideoCard from "./videoCard.jsx";
import "./videoSearch.css";
import Grid from "@mui/material/Grid2";

const debounce = (func, delay) => {
  let timeOutId;
  return function (...args) {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => func(...args), delay);
  };
};

const VideoSearch = () => {
  const [videoData, setVideoData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchFilter = async (inputText) => {
    if (inputText) {
      try {
        const response = await fetch(
          `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${inputText}`
        );
        const data = await response.json();
        console.log(data.videos);
        setVideoData(data.videos);
      } catch (err) {
        console.error(err);
      }
    } else {
      fetchVideoData();
    }
  };

  const inputRef = useRef(null);
  const debounceFunc = useRef(debounce(searchFilter, 1000)).current;

  const fetchVideoData = async () => {
    try {
      const response = await fetch(
        "https://content-xflix-backend.azurewebsites.net/v1/videos/"
      );
      const data = await response.json();
      console.log(data.videos);
      setVideoData(data.videos);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
    fetchVideoData();
  }, []);

  useEffect(() => {
    debounceFunc(searchInput);
  }, [searchInput]);

  return (
    <div className="videoSearch">
      <div className="searchInput">
        <form>
          <input
            ref={inputRef}
            type="text"
            value={searchInput}
            placeholder="search for video title"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="cardsParent">
        <Grid container spacing={2}>
          {videoData.map((cardInfo) => (
            <Grid key={cardInfo.id} size={{ xs: 12, md: 6, lg: 3 }}>
              <VideoCard data={cardInfo} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default VideoSearch;
