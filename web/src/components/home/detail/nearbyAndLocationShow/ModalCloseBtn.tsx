import { IoIosClose } from 'react-icons/io';

interface modalCloseBtn {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const ModalCloseBtn = ({ setIsModalOpen }: modalCloseBtn) => {
  return (
    <button
      onClick={() => {
        setIsModalOpen([false, false, false]);
      }}
    >
      <IoIosClose className="absolute w-10 h-10 top-4 right-4 active:bg-gray-00" />
    </button>
  );
};

export default ModalCloseBtn;
