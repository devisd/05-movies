import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOnMovieCast } from '../../services/movieSearch';

const Cast = () => {
  const { movieId } = useParams();
  const [castTeam, setCastTeam] = useState([]);

  useEffect(() => {
    fetchOnMovieCast(movieId).then(setCastTeam);
  }, [movieId]);

  if (castTeam.length === 0) {
    return (
      <>
        <h1>Cast</h1>

        <h2>Sorry, cast info not found</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>Cast</h1>

        <ul>
          {castTeam.map(el => {
            return (
              <li key={el.credit_id}>
                <h2>{el.name}</h2>
                <p>{el.character}</p>
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

export default Cast;
