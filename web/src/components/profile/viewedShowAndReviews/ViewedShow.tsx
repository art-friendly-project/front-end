import { useEffect, useState } from 'react';
import ResetBtn from './ResetBtn';
import { homeShows } from 'mock/mockData';
import Show from './Show';

const ViewedShow = () => {
  const [shows, setShows] = useState<deadlineShow[]>([]);

  useEffect(() => {
    setShows(homeShows);
  }, [homeShows]);

  return (
    <div className="relative flex flex-col items-center w-full pt-10">
      <ResetBtn />
      {shows.length === 0 ? (
        <span className="my-10">조회한 전시/행사가 없어요</span>
      ) : (
        shows.map((show) => (
          <Show
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
        ))
      )}
    </div>
  );
};

export default ViewedShow;
