import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface showDetailBackBtn {
  setShowId?: Dispatch<SetStateAction<number>>;
}

const ShowDetailBackBtn = ({ setShowId }: showDetailBackBtn) => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute z-20 left-2 top-3"
      onClick={() => {
        if (setShowId === undefined) {
          navigate(-1);
          return;
        }
        setShowId(0);
      }}
    >
      <IoIosArrowBack className="w-10 h-10 text-white" />
    </button>
  );
};

export default ShowDetailBackBtn;
