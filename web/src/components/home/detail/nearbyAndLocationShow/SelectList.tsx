import SelectBtn from './SelectBtn';

interface selectList {
  selects: string[][];
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
  setShows: React.Dispatch<React.SetStateAction<show[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SelectList = ({
  selects,
  setState,
  setIsModalOpen,
  setShows,
  setPage,
}: selectList) => {
  return (
    <div className="flex flex-wrap">
      {selects.map((select, idx) => (
        <SelectBtn
          key={idx}
          select={select}
          setState={setState}
          setIsModalOpen={setIsModalOpen}
          setShows={setShows}
          setPage={setPage}
        />
      ))}
    </div>
  );
};

export default SelectList;
