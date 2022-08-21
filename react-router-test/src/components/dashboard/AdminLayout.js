import { Outlet, Link } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
      <div className="header">後台表頭 | <Link to="/">前台首頁</Link></div>
      <main>
        <h2>後台</h2>
        <nav>
          <Link to="/admin/home">DashboardHome</Link> | <Link to="/admin/member">DashboardMember</Link>
        </nav>
        <Outlet />
      </main>
      <div className="footer">後台表尾</div>
    </>
  );
}

export default AdminLayout;
