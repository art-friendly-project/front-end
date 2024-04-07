import { useLocation } from 'react-router-dom';

const HeaderTitle = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const changeEndpointTotitle = () => {
    if (pathname.includes('nearby')) return '내 근처 전시/행사 정보';
  };

  return <span className="text-Subhead">{changeEndpointTotitle()}</span>;
};

export default HeaderTitle;
