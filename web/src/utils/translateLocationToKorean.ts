const translateLocationToKorean = (location: string) => {
  if (location === 'seoul') return '서울';
  if (location === 'gyeonggi-incheon') return '경기/인천';
  if (location === 'gangwon') return '강원';
  if (location === 'gyeongnam-busan') return '경남/부산';
  if (location === 'gyeongbuk-daegu') return '경북/대구';
  if (location === 'chungcheong-daejeon') return '충청/대전';
  if (location === 'jeolla-gwangju') return '전라/광주';
  if (location === 'jeju') return '제주';
};

export default translateLocationToKorean;
