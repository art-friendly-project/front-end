import { Outlet } from 'react-router-dom';
import DetailHeader from 'components/header/detail/DetailHeader';
import NavigationBar from 'components/navigationBar/NavigationBar';

const DetailLayout = () => {
  return (
    <>
      <DetailHeader />
      <div className="flex flex-col items-center justify-center w-full h-full overflow-y-scroll scrollbar-hide">
        <Outlet />
      </div>
      <NavigationBar />
    </>
  );
};

export default DetailLayout;
