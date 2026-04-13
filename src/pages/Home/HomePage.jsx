import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../api/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem("trending-movies");
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    } else {
      getTrendingMovies().then((data) => {
        setMovies(data);
        localStorage.setItem("trending-movies", JSON.stringify(data));
      });
    }
  }, []);

  console.log(movies);
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">
            Movies
            <br />
            Right Now
          </h1>
          <p className="hero__subtitle">The entire cinematic universe at your fingertips. From blockbuster hits to indie gems—stream what you love on any device. Simple. Fast. Movies Right Now.</p>
        </div>
      </section>
      <section className="top-movies">
        <div className="container">
          <h2 className="top-movies__title">Trending today</h2>
          <ul className="top-movies__list">
            {movies.map((movie) => (
              <li key={movie.id} className="top-movies__item">
                <Link className="top-movies__link" to={`/movies/${movie.id}`}>
                  <img className="top-movies__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} />
                  <p className="top-movies__text">{movie.title || movie.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
