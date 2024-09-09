import TasteTestTitle from './TasteTestTitle';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import RightArrowBtn from 'components/common/RightArrowBtn';

const TasteTestSeciton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const btnHandler = () => {
    dispatch(endpointActions.current('/home'));
    navigate('/taste-test');
  };

  return (
    <div className="relative flex flex-col items-center w-full pb-8 bg-orange-20">
      <TasteTestTitle />
      <RightArrowBtn fn={btnHandler} name="테스트 하러가기" />
    </div>
  );
};

export default TasteTestSeciton;
