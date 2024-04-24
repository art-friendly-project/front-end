import { useEffect, useState } from 'react';
import ViewedShowAndReviewsSectionMenu from './ViewedShowAndReviewsSectionMenu';
import ViewedShow from './ViewedShow';
import MyReivews from './MyReivews';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';

interface viewedShowAndReviewsSection {
  reviews: myReview[];
}

const ViewedShowAndReviewsSection = ({
  reviews,
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
      {currentMenu ? <ViewedShow /> : <MyReivews reviews={reviews} />}
    </div>
  );
};

export default ViewedShowAndReviewsSection;
