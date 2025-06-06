import axios from "axios";
import { createContext, useState, useContext } from "react";

const MovieContext = createContext();
const API_URL_movie = "https://api.themoviedb.org/3";
const API_URL_tv = "https://api.themoviedb.org/3";
const api_key = "1e77a6c1b6a58f585e346407db92f6d6";
const MovieProvider = ({ children }) => {
  const [movies, setMovie] = useState([]);
  const [tvseries, setTvseries] = useState([]);

  function fetchmovie(param) {
    axios
      .get(`${API_URL_movie}/search/movie?api_key=${api_key}&query=${param}`)
      .then((res) => {
        setMovie(res.data.results);
        console.log(res.data.results);
      });
  }

  function fetchTvSeries(param) {
    axios
      .get(`${API_URL_tv}/search/tv?api_key=${api_key}&query=${param}`)
      .then((res) => {
        setTvseries(res.data.results);
      });
  }

  function starValue(param) {}

  const movieData = { movies, fetchmovie, tvseries, fetchTvSeries };
  return (
    <MovieContext.Provider value={movieData}>{children}</MovieContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MovieContext);
};

export { MovieProvider, useMovies };
