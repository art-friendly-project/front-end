import TestResultExplain from '../components/home/detail/tasteTest/result/TestResultExplain';
import TestResultTitleAndProfile from '../components/home/detail/tasteTest/result/TestResultTitleAndProfile';
import TestFitOrNotFit from '../components/home/detail/tasteTest/result/TestFitOrNotFit';
import BtnBasic from 'components/common/BtnBasic';
import AnalyzeTestResult from 'utils/AnalyzeTestResult';
import { mbtiType } from 'assets/data/tasteTestData';

const TasteTestResult = () => {
  const { result } = AnalyzeTestResult();
  const mbti = mbtiType[result];

  const btnhandler = () => {};

  return (
    <>
      <TestResultTitleAndProfile
        title1={mbti.title1}
        title2={mbti.title2}
        image={mbti.image}
      />
      <TestResultExplain explain={mbti.explain} />
      <TestFitOrNotFit mbti={mbti} />
      <div className="flex justify-center mt-16">
        <BtnBasic name="결과 공유하기" fn={btnhandler} disable={false} />
      </div>
    </>
  );
};

export default TasteTestResult;
