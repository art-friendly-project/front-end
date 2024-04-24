import { useState } from 'react';
import ViewedShowAndReviewsSectionMenu from './ViewedShowAndReviewsSectionMenu';
import ViewedShow from './ViewedShow';
import MyReivews from './MyReivews';

const ViewedShowAndReviewsSection = () => {
  const [currentMenu, setCurrentMenu] = useState(true);

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
