import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/movies-api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(false);

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    setIsEmpty(false);
    searchMovies(query).then((data) => setMovies(data));
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.searchInput.value.trim();

    if (value === "") {
      setIsEmpty(true);
      setMovies([]);
      setSearchParams({});
      return;
    }

    setSearchParams({ query: value });
    form.reset();
  };

  return (
    <>
      <section className="movies">
        <div className="container">
          <form onSubmit={handleSubmit} className="search__form">
            <input className="movies-search__input" name="searchInput" type="text" autoComplete="off" autoFocus placeholder="Search movies..." defaultValue={query} />
            <button className="movies-search__btn button" type="submit">Search</button>
          </form>
          {isEmpty && <p className="movies-err__text">Please enter a movie name to start searching.</p>}
          {movies.length > 0 && (
            <ul className="movies__list">
              {movies.map((movie) => (
                <li className="movies__item" key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
                </li>
              ))}
            </ul>
          )}
          {query && movies.length === 0 && !isEmpty && <p className="movies-err__text">No movies found for "{query}"</p>}
        </div>
      </section>
    </>
  );
};

export default MoviesPage;
