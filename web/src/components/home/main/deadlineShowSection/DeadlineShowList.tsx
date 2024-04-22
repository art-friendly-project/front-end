import { homeShows } from 'mock/mockData';
import DeadlineShow from './DeadlineShow';

const DeadlineShowList = () => {
  return (
    <div className="flex flex-col items-center w-9/10">
      {homeShows.map((show) => (
        <DeadlineShow
          key={show.id}
          id={show.id}
          showType={show.showType}
          name={show.name}
          location={show.location}
          term={show.term}
          image={show.image}
          favorite={show.favorite}
          temperature={show.temperature}
        />
      ))}
    </div>
  );
};

export default DeadlineShowList;
