import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const TermsAndPolicy = () => {
  const navigate = useNavigate();
  return (
    <button
      className="relative flex items-center w-full h-12 mt-4 active:bg-gray-00 pl-[5%]"
      onClick={() => {
        navigate('/settings/terms-and-policy');
      }}
    >
      <span className="text-Subhead text-gray-110">약관 및 정책</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default TermsAndPolicy;
