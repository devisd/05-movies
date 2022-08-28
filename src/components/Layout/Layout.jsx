import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
          <NavLink to="/movies">
            <h2>Movies</h2>
          </NavLink>
        </nav>
      </header>

      <main>
        <hr />
        <br />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
