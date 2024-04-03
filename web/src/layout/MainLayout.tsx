import Header from 'components/header/Header';
import NavigationBar from 'components/navigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <NavigationBar />
    </>
  );
};

export default MainLayout;
