import TasteTestSeciton from 'components/home/main/taste/tasteTest/TasteTestSeciton';
import { useState } from 'react';
import SuggestTasteShowSection from './suggestTasteShow/SuggestTasteShowSection';

const IsTestCheck = () => {
  const [isTest, setIsTest] = useState(false);

  return (
    <>
      {isTest ? (
        <SuggestTasteShowSection />
      ) : (
        <TasteTestSeciton setIsTest={setIsTest} />
      )}
    </>
  );
};

export default IsTestCheck;
