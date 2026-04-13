import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../api/movies-api";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // ID з URL
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
// const location = useLocation();


// console.log(location);


useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div className="loading__box">Loading...</div>;

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
console.log(navigate);
  return (
    <>
      <section className="movie-details">
        <div className="container">
          <button onClick={() => navigate("/movies")} className="go-back__btn button">
            ← Go back
          </button>

          <div className="movie-details__card">
            <img className="movie-details__img" src={posterUrl} alt={movie.title} />
            <div className="movie-details__info">
              <h1 className="movie-details__title">
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h1>
              <p className="movie-details__text movie-details__score">User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h3 className="movie-details__subtitle">Overview</h3>
              <p className="movie-details__text">{movie.overview}</p>
              <h3 className="movie-details__subtitle">Genres</h3>
              <p className="movie-details__text">{movie.genres.map((g) => g.name).join("; ")}</p>
            </div>
          </div>
          <section className="additional-info">
            <h2 className="additional-info__title">Additional information</h2>
            <ul className="additional-info__list">
              <li className="additional-info__item">
                <Link to="cast">Cast</Link>
              </li>
              <li className="additional-info__item">
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </section>

          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MovieDetailsPage;
