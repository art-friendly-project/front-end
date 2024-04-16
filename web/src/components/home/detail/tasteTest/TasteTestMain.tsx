import BtnBasic from 'components/common/BtnBasic';
import character2 from '../../../../assets/images/art-friendly/character2.svg';
import { useNavigate } from 'react-router-dom';
import TasteTestMainTitle from './TasteTestMainTitle';

const TasteTestMain = () => {
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate('/home/taste-test/1');
  };

  return (
    <>
      <TasteTestMainTitle />
      <div className="flex flex-col items-center mt-32">
        <img src={character2} className="mb-32" />
        <BtnBasic name="시작하기" fn={btnHandler} />
      </div>
    </>
  );
};

export default TasteTestMain;
