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
    <div className="flex flex-col w-full h-full">
      <TasteTestMainTitle />
      <div className="flex justify-center">
        <img src={character2} className="my-[10%] absolute bottom-[20%]" />
      </div>
      <div className="absolute w-full bottom-[10%]">
        <BtnBasic name="시작하기" fn={btnHandler} disable={false} />
      </div>
    </div>
  );
};

export default TasteTestMain;
