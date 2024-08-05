import { type Dispatch, type SetStateAction } from 'react';
import SelectBtn from './SelectBtn';

interface selectList {
  selects: string[][];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
  setState: Dispatch<SetStateAction<string>>;
}

const SelectList = ({ selects, setIsModalOpen, setState }: selectList) => {
  return (
    <div className="flex flex-wrap">
      {selects.map((select, idx) => (
        <SelectBtn
          key={idx}
          select={select}
          setIsModalOpen={setIsModalOpen}
          setState={setState}
        />
      ))}
    </div>
  );
};

export default SelectList;
