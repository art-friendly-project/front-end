import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const showPage = pathname.includes('shows');

  return (
    <button
      className="absolute left-2"
      onClick={() => {
        navigate(pathname === '/prepare-service' ? -2 : -1);
      }}
    >
      <IoIosArrowBack className={`w-10 h-10 ${showPage ? 'text-white' : ''}`} />
    </button>
  );
};

export default BackBtn;
