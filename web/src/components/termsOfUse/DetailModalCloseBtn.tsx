import { type Dispatch, type SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface detailModalCloseBtn {
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
}

const DetailModalCloseBtn = ({ setIsModal }: detailModalCloseBtn) => {
  const closeBtnHandler = () => {
    setIsModal([false, false, false]);
  };
  return (
    <button
      className="absolute rounded-lg right-3 active:bg-gray-00"
      onClick={closeBtnHandler}
    >
      <IoIosClose className="w-12 h-12" />
    </button>
  );
};

export default DetailModalCloseBtn;
