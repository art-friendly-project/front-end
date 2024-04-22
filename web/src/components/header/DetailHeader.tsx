import { useLocation } from 'react-router-dom';
import BackBtn from './BackBtn';
import HeaderTitle from './HeaderTitle';
import CloseBtn from './CloseBtn';

const DetailHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const outputHeaderBtn = () => {
    if (pathname === '/home/taste-test') return true;
    if (pathname === '/home/nearby') return true;
    if (pathname === '/prepare-service') return true;
    if (pathname.includes('reviews')) return true;
    return false;
  };

  return (
    <div className="relative z-20 flex items-center justify-center flex-shrink-0 w-full h-18">
      {outputHeaderBtn() ? <BackBtn /> : null}
      <HeaderTitle />
      {outputHeaderBtn() ? null : <CloseBtn />}
    </div>
  );
};

export default DetailHeader;
