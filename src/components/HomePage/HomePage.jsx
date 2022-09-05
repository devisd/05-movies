import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchOnTrending } from 'services/movieSearch';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchOnTrending().then(setTrends);
  }, []);

  return (
    <>
      <h1>HomePage</h1>

      <ul>
        {trends &&
          trends.map(el => {
            return (
              <li key={el.id}>
                <Link to={`movies/${el.id}`} state={{ from: location }}>
                  <h2>{el.title}</h2>
                  <p>{el.release_date}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default HomePage;
