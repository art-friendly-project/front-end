import TestResultExplain from '../components/home/detail/tasteTest/result/TestResultExplain';
import TestResultTitleAndProfile from '../components/home/detail/tasteTest/result/TestResultTitleAndProfile';
import TestFitOrNotFit from '../components/home/detail/tasteTest/result/TestFitOrNotFit';
import { mbtiIdList, mbtiType } from 'assets/data/tasteTestData';
import testResult from 'utils/testResult';
import api from 'api';
import { useEffect } from 'react';

const TasteTestResult = () => {
  const { result } = testResult();
  const mbti = mbtiType[result];

  const fetchMbti = async () => {
    await api.patch('/members', {
      mbtiId: mbtiIdList.indexOf(result),
    });
  };

  useEffect(() => {
    void fetchMbti();
  }, [result]);

  return (
    <div className="w-full h-full">
      <TestResultTitleAndProfile
        title1={mbti.title1}
        title2={mbti.title2}
        image={mbti.image}
      />
      <TestResultExplain explain={mbti.explain} />
      <TestFitOrNotFit mbti={mbti} />
    </div>
  );
};

export default TasteTestResult;
