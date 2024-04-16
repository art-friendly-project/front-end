import { useLocation } from 'react-router-dom';

const HeaderTitle = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const changeEndpointTotitle = () => {
    if (pathname.includes('nearby')) return '내 근처 전시/행사 정보';
    if (pathname.includes('taste-test')) return '취향분석 테스트';
  };

  return <span className="text-Subhead">{changeEndpointTotitle()}</span>;
};

export default HeaderTitle;
