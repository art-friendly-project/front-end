import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import ViewedShowAndReviewsSectionMenu from './ViewedShowAndReviewsSectionMenu';
import ViewedShowList from './ViewedShowList';
import MyReivews from './MyReivews';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';

interface viewedShowAndReviewsSection {
  myReviews: savedReview[];
  shows: show[];
  setShows: Dispatch<SetStateAction<show[]>>;
  userId: number;
}

const ViewedShowAndReviewsSection = ({
  myReviews,
  shows,
  setShows,
  userId,
}: viewedShowAndReviewsSection) => {
  const [currentMenu, setCurrentMenu] = useState(true);

  const endpoint = useAppSelector(selectEndpoint);

  useEffect(() => {
    if (endpoint.includes('reviews')) {
      setCurrentMenu(false);
    }
  }, [endpoint]);

  return (
    <div className="flex flex-col w-full mt-8 shrink-0">
      <ViewedShowAndReviewsSectionMenu
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />
      {currentMenu ? (
        <ViewedShowList shows={shows} setShows={setShows} />
      ) : (
        <MyReivews myReviews={myReviews} userId={userId} />
      )}
    </div>
  );
};

export default ViewedShowAndReviewsSection;
