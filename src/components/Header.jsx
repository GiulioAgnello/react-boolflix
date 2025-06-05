export default function Header() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">BOOLFLIX</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search a movie..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
