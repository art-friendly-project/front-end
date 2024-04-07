import Header from 'components/header/Header';
import NavigationBar from 'components/navigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="w-full overflow-y-scroll h-41/50 scrollbar-hide">
        <Outlet />
      </div>
      <NavigationBar />
    </>
  );
};

export default MainLayout;
