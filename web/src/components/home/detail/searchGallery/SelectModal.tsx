import { type Dispatch, type SetStateAction } from 'react';

interface selectModal {
  isModalOpen: boolean[];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
}

const SelectModal = ({ isModalOpen, setIsModalOpen }: selectModal) => {
  return (
    <>
      <button
        className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50"
        onClick={() => {
          setIsModalOpen([false, false, false]);
        }}
      />
      <div className="absolute bottom-0 z-30 flex flex-col w-full pt-8 pb-10 pl-6 bg-white rounded-t-xl animate-move-top-regular"></div>
    </>
  );
};

export default SelectModal;
