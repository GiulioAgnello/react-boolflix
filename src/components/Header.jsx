export default function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BOOLFLIX</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search a movie..."
              aria-label="Search"
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
