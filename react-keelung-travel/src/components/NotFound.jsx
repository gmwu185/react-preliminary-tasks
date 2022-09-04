import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className='container'>
      <main className='row vh-100 d-flex align-items-center'>
        <div className="col text-center">
          <h2>輸入網址錯誤</h2>
          <p>請查明或回首頁重新操作</p>
          <nav>
            <Link className='btn btn-primary py-3 px-4 mb-5 mb-lg-3' to="/">返回首頁</Link>
          </nav>
        </div>
      </main>
    </main>
  );
}

export default NotFound;
