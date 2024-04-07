import posterExample1 from '../../../../assets/example/posterExample1.png';
import posterExample2 from '../../../../assets/example/posterExample2.png';
import posterExample3 from '../../../../assets/example/posterExample3.png';
import DeadlineShow from './DeadlineShow';

const DeadlineShowList = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {deadlineShows.map((show) => (
        <DeadlineShow
          key={show.id}
          sort={show.sort}
          name={show.name}
          address={show.address}
          term={show.term}
          image={show.image}
          favorite={show.favorite}
          degree={show.degree}
        />
      ))}
    </div>
  );
};

const deadlineShows = [
  {
    id: '1',
    sort: '전시',
    name: '일타 스캔들',
    address: '서울특별시 동작구 사당동',
    term: '24.01.01. ~ 24. 04. 05',
    image: posterExample1,
    favorite: false,
    degree: '100도',
  },
  {
    id: '2',
    sort: '전시',
    name: '이타 스캔들',
    address: '서울특별시 동작구 오당동',
    term: '24.01.01. ~ 24. 04. 06',
    image: posterExample2,
    favorite: true,
    degree: '19도',
  },
  {
    id: '3',
    sort: '전시',
    name: '삼타 스캔들',
    address: '서울특별시 동작구 육당동',
    term: '24.01.01. ~ 24. 04. 07',
    image: posterExample3,
    favorite: false,
    degree: '24도',
  },
];

export default DeadlineShowList;
