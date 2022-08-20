import React, { useState, useEffect } from 'react';
import { fetchOnTrending } from '../../services/movieSearch';

const HomePage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchOnTrending().then(setTrends);
  }, []);

  console.log(trends);

  return (
    <>
      <h1>HomePage</h1>

      <ul>
        {trends &&
          trends.map(el => {
            return (
              <li key={el.id}>
                <h2>{el.title}</h2>
                <p>{el.release_date}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default HomePage;
