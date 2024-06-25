import { type Dispatch, type SetStateAction } from 'react';
import SelectBtn from './SelectBtn';

interface selectList {
  type: string;
  selects: string[][];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
  setPriority: Dispatch<SetStateAction<string>>;
}

const SelectList = ({
  type,
  selects,
  setIsModalOpen,
  setPriority,
}: selectList) => {
  return (
    <div className="flex flex-wrap">
      {selects.map((select, idx) => (
        <SelectBtn
          key={idx}
          select={select}
          setIsModalOpen={setIsModalOpen}
          type={type}
          setPriority={setPriority}
        />
      ))}
    </div>
  );
};

export default SelectList;
