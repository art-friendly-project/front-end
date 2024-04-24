import { useAppDispatch } from 'hooks';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';

const ShowDetailBackBtn = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <button
      className="absolute z-20 left-2 top-3"
      onClick={() => {
        dispatch(endpointActions.current(pathname));
        navigate(-1);
      }}
    >
      <IoIosArrowBack className="w-10 h-10 text-white" />
    </button>
  );
};

export default ShowDetailBackBtn;
