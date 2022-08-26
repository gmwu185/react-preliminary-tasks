import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <main>
        <h2>輸入網址錯誤</h2>
        <p>請查明或回首頁重新操作</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NotFound;
