import BtnAndRightArrow from 'components/common/BtnAndRightArrow';
import TasteTestTitle from './TasteTestTitle';

interface tasteTestSeciton {
  setIsTest: React.Dispatch<React.SetStateAction<boolean>>;
}

const TasteTestSeciton = ({ setIsTest }: tasteTestSeciton) => {
  return (
    <div className="relative flex flex-col items-center w-full pb-6 bg-orange-0">
      <TasteTestTitle />
      <BtnAndRightArrow navi="" name="테스트 하러가기" setIsTest={setIsTest} />
    </div>
  );
};

export default TasteTestSeciton;
