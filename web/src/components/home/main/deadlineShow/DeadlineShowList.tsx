import { homeShows } from 'mock/mockData';
import DeadlineShow from './DeadlineShow';

const DeadlineShowList = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {homeShows.map((show) => (
        <DeadlineShow
          key={show.id}
          showType={show.showType}
          name={show.name}
          location={show.location}
          term={show.term}
          image={show.image}
          favorite={show.favorite}
          degree={show.degree}
        />
      ))}
    </div>
  );
};

export default DeadlineShowList;
