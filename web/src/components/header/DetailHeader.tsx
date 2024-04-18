import { useLocation } from 'react-router-dom';
import BackBtn from './BackBtn';
import HeaderTitle from './HeaderTitle';
import CloseBtn from './CloseBtn';

const DetailHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const showPage = pathname.includes('shows');

  const outputHeaderBtn = () => {
    if (pathname === '/home/taste-test') return true;
    if (pathname === '/home/nearby') return true;
    if (pathname === '/prepare-service') return true;
    if (showPage) return true;

    return false;
  };

  return (
    <div className="relative z-20 flex items-center justify-center w-full h-2/25">
      {outputHeaderBtn() ? <BackBtn /> : null}
      <HeaderTitle />
      {outputHeaderBtn() ? null : <CloseBtn />}
    </div>
  );
};

export default DetailHeader;
