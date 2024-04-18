import TasteTestSeciton from 'components/home/main/tasteSection/tasteTest/TasteTestSeciton';
import SuggestTasteShowSection from './suggestTasteShow/SuggestTasteShowSection';
import { useAppSelector } from 'hooks';
import { selectIsTest } from 'store/modules/isTest';

const IsTestCheck = () => {
  const isTest = useAppSelector(selectIsTest);

  return <>{isTest ? <SuggestTasteShowSection /> : <TasteTestSeciton />}</>;
};

export default IsTestCheck;
