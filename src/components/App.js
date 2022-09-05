import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() =>
  import('components/Layout' /* webpackChunkName: "layout" */)
);

const HomePage = lazy(() =>
  import('components/HomePage' /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import('components/MoviesPage' /* webpackChunkName: "movie-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    'components/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */
  )
);

const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "cast-page" */)
);

const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "reviews-page" */)
);

const NotFoundPage = lazy(() =>
  import('components/NotFoundPage' /* webpackChunkName: "notFound-page" */)
);

function App() {
  return (
    <div>
      <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route index path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    </div>
  );
}

export default App;
