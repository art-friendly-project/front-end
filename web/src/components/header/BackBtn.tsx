import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      className="absolute left-2"
      onClick={() => {
        navigate(-1);
      }}
    >
      <IoIosArrowBack className="w-10 h-10" />
    </button>
  );
};

export default BackBtn;
