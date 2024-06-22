import ChecksBtn from './ChecksBtn';
import ChecksAllBtn from './ChecksAllBtn';
import { type Dispatch, type SetStateAction } from 'react';
import { checks } from 'assets/data/termsOfuse';

interface checkList {
  isChecks: boolean[];
  setIsChecks: Dispatch<SetStateAction<boolean[]>>;
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
}

const CheckList = ({ isChecks, setIsChecks, setIsModal }: checkList) => {
  return (
    <div className="flex flex-col px-[5%] w-full absolute bottom-24">
      <ChecksAllBtn isChecks={isChecks} setIsChecks={setIsChecks} />
      {checks.map((check, idx) => (
        <ChecksBtn
          key={idx}
          idx={idx}
          text={check}
          isCheck={isChecks[idx]}
          setIsChecks={setIsChecks}
          setIsModal={setIsModal}
        />
      ))}
    </div>
  );
};

export default CheckList;
