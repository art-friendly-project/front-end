import { useEffect, useState } from 'react';
import ViewedShowAndReviewsSectionMenu from './ViewedShowAndReviewsSectionMenu';
import ViewedShow from './ViewedShow';
import MyReivews from './MyReivews';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';

const ViewedShowAndReviewsSection = () => {
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
      {currentMenu ? <ViewedShow /> : <MyReivews />}
    </div>
  );
};

export default ViewedShowAndReviewsSection;
