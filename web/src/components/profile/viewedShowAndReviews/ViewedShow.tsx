import { type Dispatch, type SetStateAction, useEffect } from 'react';
import ResetBtn from './ResetBtn';
import Show from './Show';

interface viewedShow {
  shows: show[];
  setShows: Dispatch<SetStateAction<show[]>>;
}

const ViewedShow = ({ shows, setShows }: viewedShow) => {
  useEffect(() => {
    const localViewedShowList = localStorage.getItem('viewedShowList');

    if (localViewedShowList !== null) {
      const viewedShowList = JSON.parse(localViewedShowList);
      const list = [];

      for (const key in viewedShowList) {
        list.push(viewedShowList[key]);
      }
      setShows(list);
    }
  }, []);

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
            title={show.title}
            area={show.area}
            startDate={show.startDate}
            endDate={show.endDate}
            imageUrl={show.imageUrl}
            isLike={show.isLike}
            temperature={show.temperature}
          />
        ))
      )}
    </div>
  );
};

export default ViewedShow;
