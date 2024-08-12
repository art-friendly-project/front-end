import { type Dispatch, type SetStateAction, useEffect } from 'react';
import ResetBtn from './ResetBtn';
import ShowItem from 'components/common/ShowItem';

interface viewedShowList {
  shows: show[];
  setShows: Dispatch<SetStateAction<show[]>>;
}

const ViewedShowList = ({ shows, setShows }: viewedShowList) => {
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
          <ShowItem
            key={show.id}
            id={show.id}
            title={show.title}
            area={show.area}
            startDate={show.startDate}
            endDate={show.endDate}
            imageUrl={show.imageUrl}
            isLike={show.isLike}
            temperature={show.temperature}
            itemStyle="mb-6 w-9/10"
            posterStyle="w-24 h-32"
          />
        ))
      )}
    </div>
  );
};

export default ViewedShowList;
