import MovieList from "../serviceComponent/Movielist";

export default function Main() {
  return (
    <>
      <div className="container-sm  mt-4">
        <div className="row g-2">
          <MovieList />
        </div>
      </div>
    </>
  );
}
