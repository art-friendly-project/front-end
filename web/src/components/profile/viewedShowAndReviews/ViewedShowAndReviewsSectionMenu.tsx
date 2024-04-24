import { type Dispatch, type SetStateAction } from 'react';

interface viewedShowAndReviewsSectionMenu {
  currentMenu: boolean;
  setCurrentMenu: Dispatch<SetStateAction<boolean>>;
}

const ViewedShowAndReviewsSectionMenu = ({
  currentMenu,
  setCurrentMenu,
}: viewedShowAndReviewsSectionMenu) => {
  return (
    <div className="flex justify-center">
      <button
        className={`flex items-center justify-center pb-2 text-Body3 w-9/20 ${currentMenu ? 'border-orange-100 text-gray-110 border-b-4' : 'border-gray-30 text-gray-50 border-b-2'}`}
        onClick={() => {
          setCurrentMenu(true);
        }}
      >
        조회한 전시/행사
      </button>
      <button
        className={`flex items-center justify-center pb-2 border-b-2 text-Body3 w-9/20 ${currentMenu ? 'border-gray-30 text-gray-50 border-b-2' : 'border-orange-100 text-gray-110 border-b-4'}`}
        onClick={() => {
          setCurrentMenu(false);
        }}
      >
        작성한 담벼락
      </button>
    </div>
  );
};

export default ViewedShowAndReviewsSectionMenu;
