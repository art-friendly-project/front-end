import SelectBtn from './SelectBtn';

interface selectList {
  selects: string[][];
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const SelectList = ({ selects, setState, setIsModalOpen }: selectList) => {
  return (
    <div className="flex flex-wrap">
      {selects.map((select) => (
        <SelectBtn
          key={select[0]}
          select={select}
          setState={setState}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
};

export default SelectList;
