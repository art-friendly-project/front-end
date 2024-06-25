import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

interface showDetailBackBtn {
  setShowId: Dispatch<SetStateAction<number>>;
}

const ShowDetailBackBtn = ({ setShowId }: showDetailBackBtn) => {
  return (
    <button
      className="absolute z-20 left-2 top-3"
      onClick={() => {
        setShowId(0);
      }}
    >
      <IoIosArrowBack className="w-10 h-10 text-white" />
    </button>
  );
};

export default ShowDetailBackBtn;
