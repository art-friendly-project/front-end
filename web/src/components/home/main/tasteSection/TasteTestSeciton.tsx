import BtnAndRightArrow from 'components/common/BtnAndRightArrow';
import TasteTestTitle from './TasteTestTitle';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';

const TasteTestSeciton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const btnHandler = () => {
    dispatch(endpointActions.current('/home'));
    navigate('/taste-test');
  };

  return (
    <div className="relative flex flex-col items-center w-full pb-6 bg-orange-0">
      <TasteTestTitle />
      <BtnAndRightArrow
        fn={btnHandler}
        name="테스트 하러가기"
        disable={false}
      />
    </div>
  );
};

export default TasteTestSeciton;
