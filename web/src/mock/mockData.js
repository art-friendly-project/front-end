import posterExample1 from 'assets/images/example/posterExample1.png';
import posterExample2 from 'assets/images/example/posterExample2.png';
import posterExample3 from 'assets/images/example/posterExample3.png';
import ENFJ from 'assets/images/tasteTestProfile/ENFJ.svg';
import ENFP from 'assets/images/tasteTestProfile/ENFP.svg';
import INTP from 'assets/images/tasteTestProfile/INTP.svg';
import smile from 'assets/images/sticker/smile.svg';
import heart from 'assets/images/sticker/heart.svg';
import sun from 'assets/images/sticker/sun.svg';

export const homeShows = [
  {
    id: 1,
    term: '24.01.01 ~ 24.04.29',
    name: 'Body, Love, Gender',
    showType: '전시',
    place: '가나아트센터',
    location: '서울',
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
    term: '24.03.02 ~ 24.05.18',
    name: '멋진 전시회',
    showType: '전시',
    place: '다라아트센터',
    location: '경기',
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
    term: '24.03.03 ~ 24.04.21',
    name: '아름다운 행사',
    showType: '행사',
    place: '마바아트센터',
    location: '인천',
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
    name: 'Body, Love, Gender',
    type: '전시',
    address: '서울',
    term: '24.01.01 ~ 24.04.29',
    temperature: '17도',
    favorite: false,
    image: posterExample1,
  },
  {
    id: 2,
    name: '멋진 전시회',
    type: '행사',
    address: '경기',
    term: '24.03.02 ~ 24.05.18',
    temperature: '80도',
    favorite: true,
    image: posterExample2,
  },
  {
    id: 3,
    name: '아름다운 행사',
    type: '전시',
    address: '인천',
    term: '24.03.03 ~ 24.04.21',
    temperature: '21도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 4,
    name: '전시회사',
    type: '행사',
    address: '서울',
    term: '24.01.01 ~ 23.02.02',
    temperature: '80도',
    favorite: true,
    image: posterExample1,
  },
  {
    id: 5,
    name: '전시회오',
    type: '전시',
    address: '서울',
    term: '24.01.01 ~ 23.02.02',
    temperature: '12도',
    favorite: false,
    image: posterExample2,
  },
  {
    id: 6,
    name: '전시회육',
    type: '전시',
    address: '서울',
    term: '24.01.01 ~ 23.02.02',
    temperature: '45도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 7,
    name: '전시회칠',
    type: '전시',
    address: '서울',
    term: '24.01.01 ~ 23.02.02',
    temperature: '62도',
    favorite: false,
    image: posterExample1,
  },
  {
    id: 8,
    name: '전시회팔',
    type: '전시',
    address: '서울',
    term: '24.01.01 ~ 23.02.02',
    temperature: '45도',
    favorite: false,
    image: posterExample2,
  },
  {
    id: 9,
    name: '전시회구',
    type: '전시',
    address: '서울',
    term: '24.01.01 ~ 23.02.02',
    temperature: '45도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 10,
    name: '전시회십',
    type: '전시',
    address: '서울',
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
      title: '1느낌 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [
        {
          id: 1,
          userId: 1,
          sticker: smile,
          comments:
            'ㅋㅋㅋㅋㅋㅋ저도 공감합니다. 전시회 굿이에요 감성 충전하고 온 것 같은 느낌이에요ㅎㅎ',
        },
        {
          id: 2,
          userId: 2,
          sticker: heart,
          comments: '아주 좋았습니다!',
        },
        {
          id: 3,
          userId: 3,
          sticker: sun,
          comments: '',
        },
      ],
      user: {
        id: 1,
        nickName: '물감만세',
        profileImage: ENFJ,
      },
    },
    {
      id: 2,
      title: '2느낌 살짝 좋은 것 같은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 1,
        nickName: '물감만세',
        profileImage: ENFJ,
      },
    },
    {
      id: 3,
      title: '3느낌이 약간 애매한데 그래도 나쁘지 않은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 1,
        nickName: '물감만세',
        profileImage: ENFJ,
      },
    },
    {
      id: 4,
      title: '4좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 2,
        nickName: '앵무새',
        profileImage: ENFP,
      },
    },
    {
      id: 5,
      title: '5기분 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 2,
        nickName: '앵무새',
        profileImage: ENFP,
      },
    },
    {
      id: 6,
      title: '6기분 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 2,
        nickName: '앵무새',
        profileImage: ENFP,
      },
    },
    {
      id: 7,
      title: '7기분 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 2,
        nickName: '앵무새',
        profileImage: ENFP,
      },
    },
    {
      id: 8,
      title: '8기분 좋은 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 3,
        nickName: '달',
        profileImage: INTP,
      },
    },
    {
      id: 9,
      title: '9조금 별로 였던... 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 3,
        nickName: '달',
        profileImage: INTP,
      },
    },
    {
      id: 10,
      title: '10살짝 아쉬웠던 전시회',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 3,
        nickName: '달',
        profileImage: INTP,
      },
    },
    {
      id: 11,
      title: '11애매했던 것 같습니다.',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 3,
        nickName: '달',
        profileImage: INTP,
      },
    },
    {
      id: 12,
      title: '12애매했던 것 같습니다.',
      content:
        '이번 전시회 진짜 좋았어 사람들도 적당히 있었고 나도 기분 좋게 봤던 것 같아 역시 전시 보는 이유가 있단 말이야~\n남들도 추천추천함 나는 그 부분이 제일 좋더라 작품 중에 알 수 없는 계절이라는 작품이 있었는데 괜찮더라고 아직 못 본 사람들도 얼른가서 봐봐 ㅎㅎ',
      createdAt: '24.04.16',
      stickers: [],
      user: {
        id: 3,
        nickName: '달',
        profileImage: INTP,
      },
    },
  ],
  [],
  [],
];

export const likeList = [
  {
    id: 1,
    term: '24.01.01 ~ 24.04.29',
    name: 'Body, Love, Gender',
    image: posterExample1,
    favorite: true,
    location: '서울',
  },
  {
    id: 2,
    term: '24.03.02 ~ 24.05.18',
    name: '멋진 전시회',
    image: posterExample2,
    favorite: true,
    location: '경기',
  },
  {
    id: 3,
    term: '24.03.03 ~ 24.04.21',
    name: '아름다운 행사',
    image: posterExample3,
    favorite: true,
    location: '인천',
  },
];

export const userData = [
  {
    id: 1,
    nickName: '물감만세',
    profileImage: ENFJ,
    isTest: false,
    testTitle: '',
    introduce: '안녕하세요. 저는 전시에 관심이 많아요.',
    interests: ['미술', '전시', '사진'],
    reviews: [
      { id: 1, showId: 1, image: posterExample1 },
      {
        id: 2,
        showId: 1,
        image: posterExample1,
      },
      {
        id: 3,
        showId: 1,
        image: posterExample1,
      },
    ],
  },
  {
    id: 2,
    nickName: '앵무새',
    profileImage: ENFP,
    isTest: false,
    testTitle: '',
    introduce: '안녕하세요. 저는 미술 관심이 많아요.',
    interests: ['미술'],
    reviews: [
      { id: 4, showId: 1, image: posterExample1 },
      {
        id: 5,
        showId: 1,
        image: posterExample1,
      },
      {
        id: 6,
        showId: 1,
        image: posterExample1,
      },
      {
        id: 7,
        showId: 1,
        image: posterExample1,
      },
    ],
  },
  {
    id: 3,
    nickName: '달',
    profileImage: INTP,
    isTest: true,
    testTitle: '논리를 분석하는 철학가',
    introduce: '안녕하세요. 저는 음악에 관심이 많아요.',
    interests: ['음악'],
    reviews: [
      { id: 8, showId: 1, image: posterExample1 },
      {
        id: 9,
        showId: 1,
        image: posterExample1,
      },
      {
        id: 10,
        showId: 1,
        image: posterExample1,
      },
      {
        id: 11,
        showId: 1,
        image: posterExample1,
      },
      {
        id: 12,
        showId: 1,
        image: posterExample1,
      },
    ],
  },
];

export const myReviews = [
  { id: 1, showId: 1, image: posterExample1 },
  {
    id: 2,
    showId: 1,
    image: posterExample1,
  },
  {
    id: 3,
    showId: 1,
    image: posterExample1,
  },
];
