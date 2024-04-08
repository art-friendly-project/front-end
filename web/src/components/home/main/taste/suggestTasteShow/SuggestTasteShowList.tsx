import { homeShows } from 'mock/mockData';
import SuggestTasteShow from './SuggestTasteShow';

const SuggestTasteShowList = () => {
  return (
    <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide pl-7 h-108 ">
      {homeShows.map((show) => (
        <SuggestTasteShow
          key={show.id}
          name={show.name}
          term={show.term}
          location={show.location}
          image={show.image}
        />
      ))}
    </div>
  );
};

export default SuggestTasteShowList;
