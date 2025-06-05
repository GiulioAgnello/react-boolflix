import { useState } from "react";
import { useMovies } from "../Context/MovieContext";

export default function Header() {
  const { fetchmovie, fetchTvSeries } = useMovies();

  const [movieserch, setSerchmovie] = useState("movie");

  function hedlerSearch(e) {
    e.preventDefault();
    fetchTvSeries("");
    console.log(movieserch);
    fetchmovie(movieserch);
  }
  function hedlerSearchtv(e) {
    e.preventDefault();
    fetchmovie("");

    console.log(movieserch);
    fetchTvSeries(movieserch);
  }
  function hedlerSearchAll(e) {
    e.preventDefault();
    fetchmovie("");
    fetchTvSeries("");
    console.log(movieserch);
    fetchmovie(movieserch);
    fetchTvSeries(movieserch);
  }
  return (
    <>
      <nav className="navbar bg-dark  border-body sticky-top ">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder ">BOOLFLIX</a>
          <form className="d-flex">
            <input
              className="form-control"
              type="text"
              onChange={(e) => setSerchmovie(e.target.value)}
              placeholder="Search a movie..."
              aria-label="text"
            />
            <div className="btn-group px-4" role="group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies/TV
              </button>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" onClick={hedlerSearch}>
                    Movies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={hedlerSearchtv}>
                    TV Series
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={hedlerSearchAll}>
                    All
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}
