import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Tabs, Tab, Grid } from "@mui/material";
import PropTypes from "prop-types";

import "./tvShows.css";
import MovieCard from "./movieCard.jsx";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    // <div
    //   role="tabpanel"
    //   id={`simple-tabpanel-${index}`}
    //   aria-labelledby={`simple-tab-${index}`}
    //   {...other}
    // >
    <>{children}</>

    // </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TvShows = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedGenres = event.target.innerText;
    filterMovieFunc(movies, selectedGenres);
  };

  const filterMovieFunc = (movies, selectedGenres) => {
    if (selectedGenres === "All") {
      setfilterMovies(movies);
    } else {
      const filterData = movies.filter(({ genres }) =>
        genres.includes(selectedGenres)
      );
      setfilterMovies(filterData);
    }
    console.log(filterMovies);
  };

  const fetchMovies = async () => {
    const response = await axios.get("https://api.tvmaze.com/shows");
    setMovies(response.data);
    setfilterMovies(response.data);
    addGenres(response.data);
  };

  const addGenres = (moviesData) => {
    const genresData = [];
    moviesData.map(({ genres }) => {
      genres.map((genre) => {
        if (!genresData.includes(genre)) {
          genresData.push(genre);
        }
      });
    });
    setGenres(genresData);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="homePage">
      <div className="heading">
        <h3>TV Shows</h3>
      </div>

      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className="tabsList"
        >
          <Tab sx={{ textTransform: "none" }} label="All" {...a11yProps(0)} />
          {genres.map((genre, index) => (
            <Tab
              key={index + 1}
              sx={{ textTransform: "none" }}
              label={genre}
              {...a11yProps(index + 1)}
            />
          ))}
        </Tabs>
      </div>
      <div className="movieCardList">
        {filterMovies.map((movie) => (
          <MovieCard movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default TvShows;
