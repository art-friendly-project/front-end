import { useAppDispatch } from 'hooks';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';

const TestSuggestBtn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex items-center mt-2"
      onClick={() => {
        dispatch(endpointActions.current('/profile'));
        navigate('/home/taste-test');
      }}
    >
      <div className="w-4 h-4 mr-2 rounded-full bg-purple-90" />
      <span className="mr-1 text-Body2-M text-gray-110">
        취향 테스트 진행 전
      </span>
      <IoIosArrowForward />
    </button>
  );
};

export default TestSuggestBtn;
