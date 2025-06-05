import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();
const API_URL = "https://api.themoviedb.org/3";
const api_key = "1e77a6c1b6a58f585e346407db92f6d6";
const MovieProvider = ({ children }) => {
  const [movies, setMovie] = useState([]);
  const [tvseries, setTvseries] = useState([]);

  function fetchmovie(param) {
    axios
      .get(`${API_URL}/search/movie?api_key=${api_key}&query=${param}`)
      .then((res) => {
        setMovie(res.data.results);
      });
  }

  function fetchTvSeries() {
    axios
      .get(`${API_URL}/search/movie?api_key=${api_key}&query=spider`)
      .then((res) => {
        setTvseries(res.data.results);
      });
  }

  useEffect(fetchmovie, []);
  const movieData = { movies, fetchmovie, tvseries, fetchTvSeries };
  return (
    <MovieContext.Provider value={movieData}>{children}</MovieContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MovieContext);
};

export { MovieProvider, useMovies };
