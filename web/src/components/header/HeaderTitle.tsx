import { useLocation } from 'react-router-dom';
import Logo from './Logo';

const HeaderTitle = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const changeEndpointTotitle = () => {
    if (pathname === '/list') return '전시/행사 목록';
  };

  return (
    <>
      {pathname === '/home' ? (
        <Logo />
      ) : (
        <span className="absolute top-5 text-Subhead">
          {changeEndpointTotitle()}
        </span>
      )}
    </>
  );
};

export default HeaderTitle;
