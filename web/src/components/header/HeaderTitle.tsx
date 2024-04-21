import { useLocation } from 'react-router-dom';

const HeaderTitle = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const changeEndpointTotitle = () => {
    if (pathname === '/home/nearby') return '내 근처 전시/행사 정보';
    if (pathname === '/home/taste-test/questions') return '취향분석 테스트';
    if (pathname === '/home/taste-test/result') return '테스트 결과';
    if (pathname.includes('reviews')) return '담벼락';
    if (pathname.includes('review-post')) return '담벼락 남기기';
  };

  return (
    <span className="absolute top-5 text-Subhead">
      {changeEndpointTotitle()}
    </span>
  );
};

export default HeaderTitle;
