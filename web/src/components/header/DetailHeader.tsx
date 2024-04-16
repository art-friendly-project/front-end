import { useLocation } from 'react-router-dom';
import BackBtn from './BackBtn';
import HeaderTitle from './HeaderTitle';
import CloseBtn from './CloseBtn';

const DetailHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const selectBackBtnOrCloseBtn = () => {
    if (pathname === '/home/taste-test') return true;
    if (pathname === '/home/nearby') return true;

    return false;
  };

  return (
    <div className="relative flex items-center justify-center w-full h-2/25">
      {selectBackBtnOrCloseBtn() ? <BackBtn /> : null}
      <HeaderTitle />
      {selectBackBtnOrCloseBtn() ? null : <CloseBtn />}
    </div>
  );
};

export default DetailHeader;
