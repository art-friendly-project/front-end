export const translateLocationEngToKor = (location: string) => {
  const eng = [
    'seoul',
    'gyeonggi-incheon',
    'gangwon',
    'gyeongnam-busan',
    'gyeongbuk-daegu',
    'chungcheong-daejeon',
    'jeolla-gwangju',
    'jeju',
  ];

  const kor = [
    '서울',
    '경기/인천',
    '강원',
    '경남/부산',
    '경북/대구',
    '충청/대전',
    '전라/광주',
    '제주',
  ];

  return kor[eng.indexOf(location)];
};

export const changeLocation = (location: string) => {
  const locationList = [
    '서울',
    '경기',
    '인천',
    '강원',
    '경남',
    '부산',
    '경북',
    '대구',
    '충북',
    '충남',
    '대전',
    '전북',
    '전남',
    '광주',
    '제주특별자치도',
  ];

  const result = [
    '서울',
    '경기/인천',
    '경기/인천',
    '강원',
    '경남/부산',
    '경남/부산',
    '경북/대구',
    '경북/대구',
    '충청/대전',
    '충청/대전',
    '충청/대전',
    '전라/광주',
    '전라/광주',
    '전라/광주',
    '제주',
  ];

  return result[locationList.indexOf(location)];
};

export const translateLocationKorToEng = (location: string) => {
  const kor = [
    '서울',
    '경기',
    '인천',
    '강원',
    '경남',
    '부산',
    '경북',
    '대구',
    '충북',
    '충남',
    '대전',
    '전북',
    '전남',
    '광주',
    '제주특별자치도',
  ];

  const eng = [
    'seoul',
    'gyeonggi-incheon',
    'gyeonggi-incheon',
    'gangwon',
    'gyeongnam-busan',
    'gyeongnam-busan',
    'gyeongbuk-daegu',
    'gyeongbuk-daegu',
    'chungcheong-daejeon',
    'chungcheong-daejeon',
    'chungcheong-daejeon',
    'jeolla-gwangju',
    'jeolla-gwangju',
    'jeolla-gwangju',
    'jeju',
  ];

  return eng[kor.indexOf(location)];
};
