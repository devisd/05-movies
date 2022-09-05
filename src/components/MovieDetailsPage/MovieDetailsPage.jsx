import { useEffect, useState, Suspense } from 'react';
import {
  useParams,
  useLocation,
  Outlet,
  Link,
  NavLink,
} from 'react-router-dom';
import { fetchOnMovieDetails } from '../../services/movieSearch';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchOnMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = location.state?.from || '/';

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to={goBack}>Go back</Link>
        <Link to={'/'}>Go Homepage</Link>
      </div>

      {movie && (
        <div>
          <div>
            <h2>{movie.title}</h2>
            <ul>
              Genres:
              {movie.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <p>Release date: {movie.release_date}</p>
            <a href={movie.homepage}>{movie.homepage}</a>
            <br />
            <NavLink to={`cast`} state={{ from: location.state.from }}>
              Cast
            </NavLink>
            <NavLink to={`reviews`} state={{ from: location.state.from }}>
              Rewiew
            </NavLink>
          </div>
        </div>
      )}
      <hr />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
