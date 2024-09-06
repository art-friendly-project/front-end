import { useLocation } from 'react-router-dom';

const DetailHeaderTitle = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const changeEndpointTotitle = () => {
    if (pathname === '/home/location') return '지역별 전시/행사 정보';
    if (pathname === '/taste-test') return '취향분석 테스트';
    if (pathname === '/taste-test/questions') return '취향분석 테스트';
    if (pathname === '/taste-test/result') return '테스트 결과';
    if (pathname.includes('reviews')) return '담벼락';
    if (pathname.includes('review-post')) return '담벼락 남기기';
    if (pathname.includes('review-edit')) return '담벼락 수정하기';
    if (pathname === '/settings') return '설정';
    if (pathname === '/profile-edit') return '프로필 수정';
    if (pathname.includes('withdrawal')) return '회원 탈퇴';
    if (pathname === '/settings/terms-and-policy') return '약관 및 정책';
    if (pathname === '/home/search-gallery') return '지역별 전시 공간';
  };

  return (
    <span className="absolute top-5 text-Subhead">
      {changeEndpointTotitle()}
    </span>
  );
};

export default DetailHeaderTitle;
