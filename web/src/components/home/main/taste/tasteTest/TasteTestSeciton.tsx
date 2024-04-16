import BtnAndRightArrow from 'components/common/BtnAndRightArrow';
import TasteTestTitle from './TasteTestTitle';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { closeNavigateActions } from 'store/modules/closeNavigate';

const TasteTestSeciton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const btnHandler = () => {
    dispatch(closeNavigateActions.setCloseNavigate('/home'));
    navigate('/home/taste-test');
  };

  return (
    <div className="relative flex flex-col items-center w-full pb-6 bg-orange-0">
      <TasteTestTitle />
      <BtnAndRightArrow fn={btnHandler} name="테스트 하러가기" />
    </div>
  );
};

export default TasteTestSeciton;
