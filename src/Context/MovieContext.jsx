import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);

  function fetchmovie() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=1e77a6c1b6a58f585e346407db92f6d6&query=terminator"
      )
      .then((res) => {
        console.log(res.data.results);

        setMovie(res.data.results);
      });
  }
  useEffect(fetchmovie, []);

  return (
    <MovieContext.Provider value={"postData"}>{children}</MovieContext.Provider>
  );
};

const usePosts = () => {
  return useContext(MovieContext);
};

export { MovieProvider, usePosts };
