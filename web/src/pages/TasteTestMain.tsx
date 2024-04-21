import BtnBasic from 'components/common/BtnBasic';
import character2 from '../assets/images/art-friendly/character2.svg';
import { useNavigate } from 'react-router-dom';
import TasteTestMainTitle from '../components/home/detail/tasteTest/questions/TasteTestMainTitle';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { tasteTestActions } from 'store/modules/tasteTest';

const TasteTestMain = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate('/home/taste-test/questions');
  };

  useEffect(() => {
    dispatch(tasteTestActions.clear());
  }, []);

  return (
    <>
      <TasteTestMainTitle />
      <div className="flex justify-center">
        <img src={character2} className="mt-32 mb-32" />
      </div>
      <BtnBasic name="시작하기" fn={btnHandler} disable={false} />
    </>
  );
};

export default TasteTestMain;
