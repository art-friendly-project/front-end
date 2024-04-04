import posterExample1 from '../../../assets/example/posterExample1.png';
import posterExample2 from '../../../assets/example/posterExample2.png';
import posterExample3 from '../../../assets/example/posterExample3.png';
import PopularShow from './PopularShow';

const PopularShowList = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {popularShows.map((show) => (
        <PopularShow
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image}
          upAndDown={show.upAndDown}
        />
      ))}
    </div>
  );
};

const popularShows = [
  {
    id: '1',
    name: '일타 스캔들',
    image: posterExample1,
    upAndDown: '+5',
  },
  {
    id: '2',
    name: '이타 스캔들',
    image: posterExample2,
    upAndDown: '-5',
  },
  {
    id: '3',
    name: '삼타 스캔들',
    image: posterExample3,
    upAndDown: '+5',
  },
];

export default PopularShowList;
