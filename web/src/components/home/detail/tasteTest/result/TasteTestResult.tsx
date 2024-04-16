import TestResultExplain from './TestResultExplain';
import TestResultTitleAndProfile from './TestResultTitleAndProfile';
import TestFitOrNotFit from './TestFitOrNotFit';
import BtnBasic from 'components/common/BtnBasic';
import AnalyzeTestResult from 'utils/AnalyzeTestResult';
import { tasteTestType } from 'assets/data/tasteTestData';

const TasteTestResult = () => {
  const { idx } = AnalyzeTestResult();
  const result = tasteTestType[idx];

  const btnhandler = () => {};

  return (
    <>
      <TestResultTitleAndProfile
        title1={result.title1}
        title2={result.title2}
        image={result.image}
      />
      <TestResultExplain explain={result.explain} />
      <TestFitOrNotFit result={result} />
      <div className="flex justify-center mt-32">
        <BtnBasic name="결과 공유하기" fn={btnhandler} disable={false} />
      </div>
    </>
  );
};

export default TasteTestResult;
