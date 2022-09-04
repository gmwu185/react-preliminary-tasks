import { Outlet } from 'react-router-dom';
import PageNav from '../page/PageNav';

const PageLayout = () => {
  return (
    <div className="bg-half">
      <PageNav />
      <div className="conatiner todoListPage vhContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
