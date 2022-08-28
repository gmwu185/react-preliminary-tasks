import { Outlet } from 'react-router-dom';
import LayoutNavber from './LayoutNavber';
import LayoutFooter from './LayoutFooter';

function Layout() {
  return (
    <>
      <LayoutNavber />
      <main>
        <Outlet />
      </main>
      <LayoutFooter />
    </>
  );
}

export default Layout;
