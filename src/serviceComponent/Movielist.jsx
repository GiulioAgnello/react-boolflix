import { useMovies } from "../Context/MovieContext";

export default function MovieList() {
  const { movies } = useMovies();
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="col-4  ">
          <div className="card ">
            {/* <img
              src={`http://localhost:3000${post.image}`}
              className="card-img-top "
              alt={post.title}
            /> */}
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <hr />
              <small>Original Title: {movie.original_title}</small>

              <hr />
              <small>language: {movie.original_language}</small>
              <hr />
              <small>Vote: {movie.vote_average}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
