import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOnMovieReviews } from '../../services/movieSearch';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchOnMovieReviews(movieId).then(setReview);
  }, [movieId]);

  if (review.length === 0) {
    return (
      <>
        <h1>Reviews</h1>

        <h2>Sorry, no Reviews</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>Reviews</h1>

        <ul>
          {review.map(el => {
            return (
              <li key={el.id}>
                <h2>
                  {el.author} ({el.author_details.username})
                </h2>
                <p>{el.content}</p>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Reviews;
