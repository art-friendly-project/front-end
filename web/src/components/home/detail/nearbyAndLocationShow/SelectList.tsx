import { type Dispatch, type SetStateAction } from 'react';
import SelectBtn from './SelectBtn';

interface selectList {
  selects: string[][];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
  setPriority: Dispatch<SetStateAction<string>> | null;
}

const SelectList = ({ selects, setIsModalOpen, setPriority }: selectList) => {
  return (
    <div className="flex flex-wrap">
      {selects.map((select, idx) => (
        <SelectBtn
          key={idx}
          select={select}
          setIsModalOpen={setIsModalOpen}
          setPriority={setPriority}
        />
      ))}
    </div>
  );
};

export default SelectList;
