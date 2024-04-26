import { type Dispatch, type SetStateAction, useEffect } from 'react';
import ResetBtn from './ResetBtn';
import Show from './Show';

interface viewedShow {
  shows: deadlineShow[];
  setShows: Dispatch<SetStateAction<deadlineShow[]>>;
}

const ViewedShow = ({ shows, setShows }: viewedShow) => {
  useEffect(() => {
    const localViewedShowList = localStorage.getItem('viewedShowList');

    if (localViewedShowList !== null) {
      const viewedShowList = JSON.parse(localViewedShowList);

      for (const key in viewedShowList) {
        setShows((prev) => [...prev, viewedShowList[key]]);
      }
    }
  }, [localStorage.getItem('viewedShowList')]);

  return (
    <div className="relative flex flex-col items-center w-full pt-10">
      <ResetBtn />
      {shows.length === 0 ? (
        <span className="my-10 text-Body3 texr-gray-110">
          조회한 전시/행사가 없어요
        </span>
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
