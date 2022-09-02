import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <form className="formControls">
      <h2 className="formControls_txt">404 無此路徑頁面，請查明或重新登入。</h2>
      <Link className="formControls_btnLink" to="/">
        前往首頁重新登入
      </Link>
    </form>
  );
};

export default NotFound;
