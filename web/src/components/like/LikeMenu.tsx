import { type Dispatch, type SetStateAction } from 'react';

interface likeMenu {
  currentMenu: boolean;
  setCurrentMenu: Dispatch<SetStateAction<boolean>>;
}

const LikeMenu = ({ currentMenu, setCurrentMenu }: likeMenu) => {
  return (
    <div className="flex justify-center mb-8">
      <button
        className={`flex items-center justify-center pb-2 text-Body3 w-9/20 ${currentMenu ? 'border-orange-100 text-gray-110 border-b-4' : 'border-gray-30 text-gray-50 border-b-2'}`}
        onClick={() => {
          setCurrentMenu(true);
        }}
      >
        관심 전시/행사
      </button>
      <button
        className={`flex items-center justify-center pb-2 border-b-2 text-Body3 w-9/20 ${currentMenu ? 'border-gray-30 text-gray-50 border-b-2' : 'border-orange-100 text-gray-110 border-b-4'}`}
        onClick={() => {
          setCurrentMenu(false);
        }}
      >
        저장한 담벼락
      </button>
    </div>
  );
};

export default LikeMenu;
