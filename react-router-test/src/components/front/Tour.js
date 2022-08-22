import { Outlet, Link } from 'react-router-dom';
function Tour() {
  return (
    <>
      <h2>大肚台地產業與資源調查_觀光遊憩業</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/faq">FQA</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Tour;
