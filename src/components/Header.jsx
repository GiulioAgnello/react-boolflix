import { useState } from "react";
import { useMovies } from "../Context/MovieContext";

export default function Header() {
  const { fetchmovie } = useMovies();

  const [movieserch, setSerchmovie] = useState("movie");

  function hedlerSearch(e) {
    e.preventDefault();
    console.log(movieserch);
    fetchmovie(movieserch);
  }
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BOOLFLIX</a>
          <form className="d-flex" onSubmit={hedlerSearch}>
            <input
              className="form-control me-2"
              type="text"
              onChange={(e) => setSerchmovie(e.target.value)}
              placeholder="Search a movie..."
              aria-label="text"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
