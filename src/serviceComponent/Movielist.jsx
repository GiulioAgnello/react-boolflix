import { useMovies } from "../Context/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
// export

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
        <div key={movie.id} className="col-3 g-4  ">
          <div className="card position-relative">
            <div className="card-imagexd  z-2">
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="card-body position-absolute  ">
              <h5 className="card-title">{movie.title}</h5>

              <div>Original Title: {movie.original_title}</div>

              <div className="flagimage">
                language: {flegChange(movie.original_language)}
              </div>

              <div>
                Vote:
                {Array.from({ length: Math.ceil(movie.vote_average / 2) }).map(
                  (_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {tvseries.map((serie) => (
        <div key={serie.id} className="col-3 g-4 ">
          <div className="card position-relative">
            <div className="card-imagexd  z-2">
              <img
                src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                className="card-img-top "
                alt={serie.title}
              />
            </div>
            <div className="card-body position-absolute   ">
              <h5 className="card-title">{serie.name}</h5>

              <div>Original Title: {serie.original_name}</div>

              <div className="flagimage">
                language: {flegChange(serie.original_language)}
              </div>

              <div>
                Vote:{" "}
                {Array.from({ length: Math.ceil(serie.vote_average / 2) }).map(
                  (v, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
