import PopularShowTitle from './PopularShowTitle';
import PopularShowList from './PopularShowList';
import { type Dispatch, type SetStateAction } from 'react';

interface popularShowSection {
  setShowId: Dispatch<SetStateAction<number>>;
}

const PopularShowSection = ({ setShowId }: popularShowSection) => {
  return (
    <div className="flex flex-col items-center w-full mt-10 mb-8">
      <PopularShowTitle />
      <PopularShowList setShowId={setShowId} />
    </div>
  );
};

export default PopularShowSection;
