import RankTitle from './RankTitle';
import RankList from './RankIconList';
import { type Dispatch, type SetStateAction } from 'react';

interface rankSection {
  checkTemperature: string | null;
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const RankSection = ({
  checkTemperature,
  isModal,
  setIsModal,
}: rankSection) => {
  return (
    <div className="w-full mt-8 border-b-10 border-b-gray-10">
      <RankTitle />
      <RankList
        checkTemperature={checkTemperature}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </div>
  );
};

export default RankSection;
