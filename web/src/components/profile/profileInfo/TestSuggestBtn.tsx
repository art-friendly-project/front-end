import { useAppDispatch } from 'hooks';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';

interface testSuggestBtn {
  isMyAccount: boolean;
}

const TestSuggestBtn = ({ isMyAccount }: testSuggestBtn) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex items-center justify-center h-8 mt-2 -ml-3 rounded-lg w-44 active:bg-gray-00"
      disabled={!isMyAccount}
      onClick={() => {
        dispatch(endpointActions.current('/profile'));
        navigate('/home/taste-test');
      }}
    >
      {isMyAccount ? (
        <div className="w-4 h-4 mr-2 rounded-full bg-purple-90" />
      ) : null}
      <span className="mr-1 text-Body2-M text-gray-110">
        취향 테스트 진행 전
      </span>
      {isMyAccount ? <IoIosArrowForward /> : null}
    </button>
  );
};

export default TestSuggestBtn;
