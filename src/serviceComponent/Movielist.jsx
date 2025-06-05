import { useMovies } from "../Context/MovieContext";

export default function MovieList() {
  const { movies, tvseries } = useMovies();

  function flegChange(param) {
    if (param === "en") {
      return <img src="public\Flag_of_the_United_Kingdom_(1-2).svg" alt="en" />;
    }
    if (param === "it") {
      return (
        <img
          src="public\italy-italia-flag-of-italy-italian-flag-flag.webp"
          alt="it"
        />
      );
    } else
      return <img src="public\Flag_with_question_mark.svg.png" alt="unknown" />;
  }
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
              <small>language: {flegChange(movie.original_language)}</small>
              <hr />
              <small>Vote: {movie.vote_average}</small>
            </div>
          </div>
        </div>
      ))}
      {tvseries.map((serie) => (
        <div key={serie.id} className="col-4  ">
          <div className="card ">
            {/* <img
              src={`http://localhost:3000${post.image}`}
              className="card-img-top "
              alt={post.title}
            /> */}
            <div className="card-body">
              <h5 className="card-title">{serie.name}</h5>
              <hr />
              <small>Original Title: {serie.original_name}</small>

              <hr />
              <small>language: {flegChange(serie.original_language)}</small>
              <hr />
              <small>Vote: {serie.vote_average}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
