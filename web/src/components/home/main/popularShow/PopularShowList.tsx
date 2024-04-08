import { homeShows } from 'mock/mockData';
import PopularShow from './PopularShow';

const PopularShowList = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {homeShows.map((show) => (
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

export default PopularShowList;
