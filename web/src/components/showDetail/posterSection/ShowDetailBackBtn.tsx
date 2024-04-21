import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const ShowDetailBackBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      className="absolute z-20 left-2 top-3"
      onClick={() => {
        navigate('/home');
      }}
    >
      <IoIosArrowBack className="w-10 h-10 text-white" />
    </button>
  );
};

export default ShowDetailBackBtn;
