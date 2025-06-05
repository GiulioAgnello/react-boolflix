import MovieList from "../serviceComponent/Movielist";

export default function Main() {
  return (
    <>
      <div className="container-sm  mt-1">
        <h1 className="text-center mb-1">MOVIES</h1>
        <div className="row g-2">
          <MovieList />
        </div>
      </div>
    </>
  );
}
