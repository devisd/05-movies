import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchOnSearchMovies } from '../../services/movieSearch';

const MoviePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') || '';
  const location = useLocation();

  useEffect(() => {
    if (window.localStorage.getItem('query'))
      fetchOnSearchMovies(query).then(setMovies);
  }, [query]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
    if (searchQuery) {
      resetLocalStorage();
      setSearchParams({ query: e.target.value });
    } else {
      setSearchParams('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery(searchQuery);
    fetchOnSearchMovies(query).then(setMovies);
    window.localStorage.setItem('query', JSON.stringify(query));
  };

  const resetLocalStorage = () => {
    window.localStorage.removeItem('query');
  };
  return (
    <>
      <h1>Movie Page</h1>

      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          value={searchQuery}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          placeholder="search..."
        />
      </form>

      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  <h2>{movie.title}</h2>
                  <p>{movie.vote_average}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MoviePage;
