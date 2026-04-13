import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/movies-api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (cast.length === 0) {
    return <p className="no-cast__text">We don't have any cast information for this movie.</p>;
  }

  return (
    <ul className="cast__list">
      {cast.map(({ id, name, character, profile_path }) => (
        <li className="cast__item" key={id}>
          <img className="cast__img"
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"
            }
            alt={name}
          />
          <p className="cast__text">{name}</p>
          <p className="cast__text">
            <span className="cast-bold__text">Character</span>: {character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
