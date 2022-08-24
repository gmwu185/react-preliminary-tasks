import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className="header">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tour">Tour</Link> </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
      <footer className="footer">表尾</footer>
    </>
  );
}

export default Layout;
