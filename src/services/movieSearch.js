import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '60778458bdbdfa7e14ca7e73fe4a1fef';

// // список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export async function fetchOnTrending() {
  const response = await axios.get(`/trending/movie/week?api_key=${KEY}`);
  return response.data.results;
}

// поиск кинофильма по ключевому слову на странице фильмов.
export async function fetchOnSearchMovies(searchQuery) {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
  return response.data.results;
}

// запрос полной информации о фильме для страницы кинофильма.
export async function fetchOnMovieDetails(movieId) {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

// запрос информации о актёрском составе для страницы кинофильма.
export async function fetchOnMovieCast(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
}

// запрос обзоров для страницы кинофильма.
export async function fetchOnMovieReviews(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
}
