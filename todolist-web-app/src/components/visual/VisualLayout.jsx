import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Notiflix from 'notiflix';

const VisualLayout = () => {
  useEffect(() => {
    Notiflix.Loading.custom('讀取中 ...');
    setTimeout(() => {
      Notiflix.Loading.remove();
    }, 1000);
  }, []);

  return (
    <div className="bg-yellow">
      <div className="conatiner loginPage vhContainer">
        <div className="side">
          <Link to="/">
            <img
              className="logoImg"
              src={`${process.env.PUBLIC_URL}/assets/img/rhefZ3.png`}
              alt=""
            />
          </Link>
          <img
            className="d-m-n"
            src={`${process.env.PUBLIC_URL}/assets/img/tj3Bdk.png`}
            alt="workImg"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default VisualLayout;
