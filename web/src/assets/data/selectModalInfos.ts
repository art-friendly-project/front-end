const selectModalInfos = [
  {
    title1: '내 근처 전시/행사',
    title2: '전시/행사를 보고 싶은 지역을 선택해보세요',
    selects: [
      ['seoul', '서울'],
      ['gyeonggi-incheon', '경기/인천'],
      ['gangwon', '강원'],
      ['gyeongnam-busan', '경남/부산'],
      ['gyeongbuk-daegu', '경북/대구'],
      ['chungcheong-daejeon', '충청/대전'],
      ['jeolla-gwangju', '전라/광주'],
      ['jeju', '제주'],
    ],
  },
  {
    title1: '전시/행사',
    title2: '전시와 행사 중 어떤 것을 보고 싶으신가요?',
    selects: [
      ['exhibition', '전시'],
      ['event', '행사'],
    ],
  },
  {
    title1: '인기순/최신순',
    title2: '선택한 순으로 전시회를 알려드려요',
    selects: [
      ['popularity', '인기순'],
      ['latest', '최신순'],
    ],
  },
];

export default selectModalInfos;
