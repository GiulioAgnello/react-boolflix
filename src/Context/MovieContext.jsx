import axios from "axios";
import { createContext, useState, useContext } from "react";

const MovieContext = createContext();

// import da env
const apiUrl = import.meta.env.VITE_APP_URL;
const apiKay = import.meta.env.VITE_APP_KEY;

// settaggi
const MovieProvider = ({ children }) => {
  const [movies, setMovie] = useState([]);
  const [tvseries, setTvseries] = useState([]);

  // fetch per chiamate axios
  function fetchmovie(param) {
    axios
      .get(`${apiUrl}/search/movie?api_key=${apiKay}&query=${param}`)
      .then((res) => {
        setMovie(res.data.results);
        console.log(res.data.results);
      });
  }

  function fetchTvSeries(param) {
    axios
      .get(`${apiUrl}/search/tv?api_key=${apiKay}&query=${param}`)
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
