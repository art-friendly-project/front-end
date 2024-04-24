import Header from 'components/header/main/Header';
import NavigationBar from 'components/navigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar-hide">
        <Outlet />
      </div>
      <NavigationBar />
    </>
  );
};

export default MainLayout;
