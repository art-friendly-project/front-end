import FilterSelectModalTitle from './FilterSelectModalTitle';
import ModalCloseBtn from './ModalCloseBtn';
import SelectList from './SelectList';

interface filterSelectModal {
  title1: string;
  title2: string;
  selects: string[][];
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const FilterSelectModal = ({
  title1,
  title2,
  selects,
  setState,
  setIsModalOpen,
}: filterSelectModal) => {
  return (
    <>
      <div className="absolute top-0 z-20 w-full h-screen bg-black opacity-50" />
      <div className="absolute bottom-0 z-30 flex flex-col w-full pt-8 pb-10 pl-6 bg-white rounded-t-xl animate-move-top-regular">
        <FilterSelectModalTitle title1={title1} title2={title2} />
        <ModalCloseBtn setIsModalOpen={setIsModalOpen} />
        <SelectList
          selects={selects}
          setState={setState}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

export default FilterSelectModal;
