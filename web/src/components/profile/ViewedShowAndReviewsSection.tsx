import { useState } from 'react';
import ViewedShowAndReviewsSectionMenu from './ViewedShowAndReviewsSectionMenu';
import ViewedShow from './ViewedShow';
import MyReivews from './MyReivews';

const ViewedShowAndReviewsSection = () => {
  const [currentMenu, setCurrentMenu] = useState(true);

  return (
    <div className="flex flex-col mt-8">
      <ViewedShowAndReviewsSectionMenu
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />
      {currentMenu ? <ViewedShow /> : <MyReivews />}
    </div>
  );
};

export default ViewedShowAndReviewsSection;
