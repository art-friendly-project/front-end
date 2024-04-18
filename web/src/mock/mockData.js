import posterExample1 from '../assets/images/example/posterExample1.png';
import posterExample2 from '../assets/images/example/posterExample2.png';
import posterExample3 from '../assets/images/example/posterExample3.png';

export const homeShows = [
  {
    id: 1,
    term: '24.03.01 ~ 24.06.01',
    name: 'Body, Love, Gender',
    showType: '전시',
    place: '가나아트센터',
    location: '서울특별시 강남구 역삼동',
    phone: '02-233-3235',
    site: 'https://www.naver.com',
    image: posterExample1,
    favorite: false,
    temperature: '100도',
    upAndDown: '+5',
    rank: 5,
  },
  {
    id: 2,
    term: '24.03.02 ~ 24.06.02',
    name: '멋진 전시회',
    showType: '전시',
    place: '다라아트센터',
    location: '서울특별시 강남구 도곡동',
    phone: '02-240-4256',
    site: 'https://www.naver.com',
    image: posterExample2,
    favorite: true,
    temperature: '19도',
    upAndDown: '-5',
    rank: 0,
  },
  {
    id: 3,
    term: '24.03.03 ~ 24.06.03',
    name: '아름다운 행사',
    showType: '행사',
    place: '마바아트센터',
    location: '서울특별시 강남구 대치동',
    phone: '02-260-6768',
    site: 'https://www.naver.com',
    image: posterExample3,
    favorite: false,
    temperature: '24도',
    upAndDown: '0',
    rank: 3,
  },
];

export const nearbyShows = [
  {
    id: 1,
    name: '전시회일',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '17도',
    favorite: false,
    image: posterExample1,
  },
  {
    id: 2,
    name: '전시회이',
    type: '행사',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '80도',
    favorite: true,
    image: posterExample2,
  },
  {
    id: 3,
    name: '전시회삼',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '21도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 4,
    name: '전시회사',
    type: '행사',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '80도',
    favorite: true,
    image: posterExample1,
  },
  {
    id: 5,
    name: '전시회오',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '12도',
    favorite: false,
    image: posterExample2,
  },
  {
    id: 6,
    name: '전시회육',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '45도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 7,
    name: '전시회칠',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '62도',
    favorite: false,
    image: posterExample1,
  },
  {
    id: 8,
    name: '전시회팔',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '45도',
    favorite: false,
    image: posterExample2,
  },
  {
    id: 9,
    name: '전시회구',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '45도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 10,
    name: '전시회십',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    temperature: '45도',
    favorite: false,
    image: posterExample1,
  },
];

export const reviewDatas = [
  [],
  [
    {
      id: 1,
      title: '느낌 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 2,
      title: '느낌 살짝 좋은 것 같은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 3,
      title: '느낌이 약간 애매한데 그래도 나쁘지 않은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 4,
      title: '느낌만 있는 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 5,
      title: '느낌 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 6,
      title: '느낌 살짝 좋은 것 같은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 7,
      title: '느낌이 약간 애매한데 그래도 나쁘지 않은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 8,
      title: '느낌만 있는 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 9,
      title: '느낌 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 10,
      title: '느낌 살짝 좋은 것 같은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 11,
      title: '느낌이 약간 애매한데 그래도 나쁘지 않은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
    {
      id: 12,
      title: '느낌만 있는 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~ 남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
    },
  ],
  [],
  [],
  [],
];
