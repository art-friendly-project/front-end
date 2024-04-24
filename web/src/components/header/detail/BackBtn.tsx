import { useAppDispatch } from 'hooks';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';

const BackBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const moveNavigate = () => {
    if (pathname === '/prepare-service') {
      navigate(-2);
      return;
    }
    dispatch(endpointActions.current(pathname));
    navigate(-1);
  };

  return (
    <button
      className="absolute left-2 top-4"
      onClick={() => {
        moveNavigate();
      }}
    >
      <IoIosArrowBack className="w-10 h-10" />
    </button>
  );
};

export default BackBtn;
