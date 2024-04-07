import FilterList from './FilterList';
import ShowList from './ShowList';
import posterExample1 from '../../../../assets/example/posterExample1.png';
import posterExample2 from '../../../../assets/example/posterExample2.png';
import posterExample3 from '../../../../assets/example/posterExample3.png';

const NearbyAndLocationShow = () => {
  return (
    <>
      <FilterList />
      <ShowList shows={shows} />
    </>
  );
};

export default NearbyAndLocationShow;

const shows = [
  {
    id: 1,
    name: '전시회일',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '17도',
    favorite: false,
    image: posterExample1,
  },
  {
    id: 2,
    name: '전시회이',
    type: '행사',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '80도',
    favorite: true,
    image: posterExample2,
  },
  {
    id: 3,
    name: '전시회삼',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '21도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 4,
    name: '전시회사',
    type: '행사',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '80도',
    favorite: true,
    image: posterExample1,
  },
  {
    id: 5,
    name: '전시회오',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '12도',
    favorite: false,
    image: posterExample2,
  },
  {
    id: 6,
    name: '전시회육',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '45도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 7,
    name: '전시회칠',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '62도',
    favorite: false,
    image: posterExample1,
  },
  {
    id: 8,
    name: '전시회팔',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '45도',
    favorite: false,
    image: posterExample2,
  },
  {
    id: 9,
    name: '전시회구',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '45도',
    favorite: false,
    image: posterExample3,
  },
  {
    id: 10,
    name: '전시회십',
    type: '전시',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01 ~ 23.02.02',
    degree: '45도',
    favorite: false,
    image: posterExample1,
  },
];
