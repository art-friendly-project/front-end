import { Outlet } from 'react-router-dom';
import DetailHeader from 'components/header/DetailHeader';

const DetailLayoutWithoutNav = () => {
  return (
    <>
      <DetailHeader />
      <div className="w-full overflow-y-scroll h-23/25 scrollbar-hide">
        <Outlet />
      </div>
    </>
  );
};

export default DetailLayoutWithoutNav;
