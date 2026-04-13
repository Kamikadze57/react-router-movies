import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movies-api";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p className="no-reviews__text">We don't have any reviews for this movie.</p>;
  }

  return (
    <ul className="reviews__list">
      {reviews.map(({ id, author, content }) => (
        <li className="reviews__item" key={id}>
          <h4 className="reviews-item__title">Author: {author}</h4>
          <p className="reviews-item_text">{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
