import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className="header">表頭 | <Link to="/admin">後台首頁</Link></div>
      <main>
        <Outlet />
      </main>
      <div className="footer">表尾</div>
    </>
  );
}

export default Layout;
