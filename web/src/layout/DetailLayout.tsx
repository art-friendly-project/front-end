import { Outlet } from 'react-router-dom';
import DetailHeader from 'components/header/DetailHeader';
import NavigationBar from 'components/navigationBar/NavigationBar';

const DetailLayout = () => {
  return (
    <>
      <DetailHeader />
      <div className="w-full overflow-y-scroll h-41/50 scrollbar-hide">
        <Outlet />
      </div>
      <NavigationBar />
    </>
  );
};

export default DetailLayout;
