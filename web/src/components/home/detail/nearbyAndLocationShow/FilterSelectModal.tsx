import { type Dispatch, type SetStateAction } from 'react';
import FilterSelectModalTitle from './FilterSelectModalTitle';
import ModalCloseBtn from './ModalCloseBtn';
import SelectList from './SelectList';

interface filterSelectModal {
  title1: string;
  title2: string;
  selects: string[][];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
  setPriority: Dispatch<SetStateAction<string>> | null;
}

const FilterSelectModal = ({
  title1,
  title2,
  selects,
  setIsModalOpen,
  setPriority,
}: filterSelectModal) => {
  return (
    <>
      <button
        className="fixed z-20 w-full h-screen bg-black opacity-50 top-1"
        onClick={() => {
          setIsModalOpen([false, false, false]);
        }}
      />
      <div className="absolute bottom-0 z-30 flex flex-col w-full pt-8 pb-10 pl-6 bg-white rounded-t-xl animate-move-top-regular">
        <FilterSelectModalTitle title1={title1} title2={title2} />
        <ModalCloseBtn setIsModalOpen={setIsModalOpen} />
        <SelectList
          selects={selects}
          setIsModalOpen={setIsModalOpen}
          setPriority={setPriority}
        />
      </div>
    </>
  );
};

export default FilterSelectModal;
