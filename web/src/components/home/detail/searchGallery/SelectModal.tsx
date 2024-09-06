import { type Dispatch, type SetStateAction } from 'react';
import ModalCloseBtn from '../nearbyAndLocationShow/ModalCloseBtn';
import FilterSelectModalTitle from '../nearbyAndLocationShow/FilterSelectModalTitle';
import SelectList from './SelectList';

interface selectModal {
  firstLocation: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
  setState: Dispatch<SetStateAction<string>>;
  selects: string[];
}

const SelectModal = ({
  firstLocation,
  setIsModalOpen,
  setState,
  selects,
}: selectModal) => {
  return (
    <>
      <button
        className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50"
        onClick={() => {
          setIsModalOpen([false, false]);
        }}
      />
      <div className="absolute bottom-0 z-30 flex flex-col w-full pt-8 pb-10 pl-6 bg-white rounded-t-xl animate-move-top-regular">
        <FilterSelectModalTitle
          title1="지역별 전시 공간"
          title2="지역을 선택하여 전시관을 확인해 보세요"
        />
        <ModalCloseBtn setIsModalOpen={setIsModalOpen} />
        <SelectList
          setIsModalOpen={setIsModalOpen}
          setState={setState}
          selects={selects}
        />
      </div>
    </>
  );
};

export default SelectModal;
