import { Outlet, Link } from 'react-router-dom';

const VisualLayout = () => {
  return (
    <div className="bg-yellow">
      <div className="conatiner loginPage vhContainer">
        <div className="side">
          <Link to="/">
            <img className="logoImg" src="assets/img/rhefZ3.png" alt="" />
          </Link>
          <img className="d-m-n" src="assets/img/tj3Bdk.png" alt="workImg" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default VisualLayout;
