const selectModalInfos = [
  {
    type: 'location',
    title1: '내 근처 전시/행사',
    title2: '전시/행사를 보고 싶은 지역을 선택해보세요',
    selects: [
      ['서울', '서울'],
      ['경기/인천', '경기/인천'],
      ['강원', '강원'],
      ['경남/부산', '경남/부산'],
      ['경북/대구', '경북/대구'],
      ['충청/대전', '충청/대전'],
      ['전라/광주', '전라/광주'],
      ['제주', '제주'],
    ],
  },
  {
    type: 'priority',
    title1: '인기순/최신순',
    title2: '선택한 순으로 전시회를 알려드려요',
    selects: [
      ['popular', '인기순'],
      ['recent', '최신순'],
    ],
  },
];

export default selectModalInfos;
